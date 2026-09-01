"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export type SimulationData = {
  amount: number;
  days: number;
  monthlyRate: number;
  receivableType: string;
  estimatedNet: number;
};

export function SimulatorCard({ onAfterRequest }: { onAfterRequest?: () => void }) {
  const [amount, setAmount] = useState(100000);
  const [days, setDays] = useState(30);
  const [monthlyRate, setMonthlyRate] = useState(1.59);
  const [receivableType, setReceivableType] = useState("Duplicatas");

  const result = useMemo(() => {
    const safeAmount = Math.max(0, Math.min(amount || 0, 100_000_000));
    const safeDays = Math.max(1, Math.min(days || 1, 365));
    const safeRate = Math.max(0, Math.min(monthlyRate || 0, 20));
    const estimatedCost = safeAmount * (safeRate / 100) * (safeDays / 30);
    return {
      amount: safeAmount,
      days: safeDays,
      monthlyRate: safeRate,
      receivableType,
      estimatedCost,
      estimatedNet: Math.max(0, safeAmount - estimatedCost),
    };
  }, [amount, days, monthlyRate, receivableType]);

  function requestAnalysis() {
    const data: SimulationData = {
      amount: result.amount,
      days: result.days,
      monthlyRate: result.monthlyRate,
      receivableType: result.receivableType,
      estimatedNet: result.estimatedNet,
    };
    window.dispatchEvent(new CustomEvent<SimulationData>("affix:simulation", { detail: data }));
    if (onAfterRequest) {
      onAfterRequest();
    } else {
      window.location.hash = "contato";
    }
  }

  return (
    <div className="simulator-card">
      <div className="simulator-fields">
        <label>
          <span>Valor dos recebíveis</span>
          <span className="input-affix"><b>R$</b><input type="number" min="1000" max="100000000" step="1000" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /></span>
        </label>
        <label>
          <span>Prazo médio</span>
          <span className="input-affix"><input type="number" min="1" max="365" value={days} onChange={(event) => setDays(Number(event.target.value))} /><b>dias</b></span>
        </label>
        <label>
          <span>Tipo de recebível</span>
          <select value={receivableType} onChange={(event) => setReceivableType(event.target.value)}>
            <option>Duplicatas</option>
            <option>Cheques</option>
            <option>Boletos</option>
            <option>Notas fiscais</option>
            <option>Contratos</option>
          </select>
        </label>
        <label>
          <span>Taxa mensal de referência</span>
          <span className="input-affix"><input type="number" min="0" max="20" step="0.01" value={monthlyRate} onChange={(event) => setMonthlyRate(Number(event.target.value))} /><b>% a.m.</b></span>
        </label>
      </div>

      <div className="simulator-result" aria-live="polite">
        <span>Valor líquido estimado</span>
        <strong>{currency.format(result.estimatedNet)}</strong>
        <small>Custo estimado: {currency.format(result.estimatedCost)}</small>
      </div>

      <button className="button button-dark button-full" type="button" onClick={requestAnalysis}>
        Solicitar análise personalizada <Icon name="arrow" size={20} />
      </button>
      <p className="simulator-disclaimer">
        Simulação meramente ilustrativa. A taxa e o valor finais dependem da análise dos títulos, prazos, documentação e condições da operação. Não configura proposta de crédito.
      </p>
    </div>
  );
}

export function Simulator() {
  return (
    <section className="section simulator-section" id="simulador" aria-labelledby="simulator-title">
      <div className="container simulator-layout">
        <div className="simulator-copy">
          <SectionHeading
            id="simulator-title"
            title="Descubra o potencial dos seus recebíveis."
            description="Faça uma estimativa inicial e envie os dados para uma análise personalizada da nossa equipe."
          />
          <ul className="check-list">
            <li><Icon name="check" size={19} /> Resultado imediato</li>
            <li><Icon name="check" size={19} /> Sem compromisso</li>
            <li><Icon name="check" size={19} /> Análise final personalizada</li>
          </ul>
        </div>
        <SimulatorCard />
      </div>
    </section>
  );
}
