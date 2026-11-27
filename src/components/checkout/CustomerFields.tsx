import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface CustomerData {
  name: string; email: string; whatsapp: string; cpf: string;
  cep: string; street: string; number: string; complement: string; district: string; city: string; state: string;
}
export const emptyCustomer: CustomerData = { name: "", email: "", whatsapp: "", cpf: "", cep: "", street: "", number: "", complement: "", district: "", city: "", state: "" };

const digits = (v: string) => v.replace(/\D/g, "");

export function isValidCpf(raw: string): boolean {
  const c = digits(raw);
  if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
  const calc = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(c[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return calc(9) === Number(c[9]) && calc(10) === Number(c[10]);
}

export function validateCustomer(d: CustomerData): Partial<Record<keyof CustomerData, string>> {
  const e: Partial<Record<keyof CustomerData, string>> = {};
  if (d.name.trim().split(" ").length < 2) e.name = "Informe nome e sobrenome";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "E-mail inválido";
  if (digits(d.whatsapp).length < 10) e.whatsapp = "WhatsApp inválido";
  if (!isValidCpf(d.cpf)) e.cpf = "CPF inválido";
  if (digits(d.cep).length !== 8) e.cep = "CEP inválido";
  if (!d.street.trim()) e.street = "Informe a rua";
  if (!d.number.trim()) e.number = "Informe o número";
  if (!d.district.trim()) e.district = "Informe o bairro";
  if (!d.city.trim()) e.city = "Informe a cidade";
  if (!/^[A-Za-z]{2}$/.test(d.state)) e.state = "UF";
  return e;
}

const mask = {
  cpf: (v: string) => digits(v).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2"),
  whatsapp: (v: string) => digits(v).slice(0, 11).replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{1,4})$/, "$1-$2"),
  cep: (v: string) => digits(v).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2"),
};

interface Props { data: CustomerData; errors: Partial<Record<keyof CustomerData, string>>; onChange: (d: CustomerData) => void }

export function CustomerFields({ data, errors, onChange }: Props) {
  const [cepStatus, setCepStatus] = useState<"idle" | "loading" | "error">("idle");
  const set = (k: keyof CustomerData, v: string) => onChange({ ...data, [k]: v });

  const lookupCep = async (cep: string) => {
    const c = digits(cep);
    if (c.length !== 8) return;
    setCepStatus("loading");
    try {
      const res = await fetch(`https://viacep.com.br/ws/${c}/json/`);
      const j = (await res.json()) as { erro?: boolean; logradouro?: string; bairro?: string; localidade?: string; uf?: string };
      if (j.erro) throw new Error("not found");
      onChange({ ...data, cep: mask.cep(c), street: j.logradouro ?? "", district: j.bairro ?? "", city: j.localidade ?? "", state: j.uf ?? "" });
      setCepStatus("idle");
      document.getElementById("f-number")?.focus();
    } catch {
      setCepStatus("error");
    }
  };

  const field = (k: keyof CustomerData, label: string, opts: { type?: string; inputMode?: "numeric" | "email" | "tel" | "text"; className?: string; auto?: string } = {}) => (
    <div className={opts.className}>
      <Label htmlFor={`f-${k}`} className="mb-1.5 block text-sm">{label}</Label>
      <Input
        id={`f-${k}`}
        type={opts.type ?? "text"}
        inputMode={opts.inputMode}
        autoComplete={opts.auto}
        value={data[k]}
        aria-invalid={Boolean(errors[k])}
        className="h-12 bg-card text-base"
        onChange={(e) => {
          const v = k in mask ? mask[k as keyof typeof mask](e.target.value) : e.target.value;
          set(k, v);
          if (k === "cep" && digits(v).length === 8) void lookupCep(v);
        }}
      />
      {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <>
      <fieldset className="rounded-2xl bg-card p-5 shadow-card">
        <legend className="mb-4 font-serif text-xl">1. Seus dados</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {field("name", "Nome completo", { className: "sm:col-span-2", auto: "name" })}
          {field("email", "E-mail", { type: "email", inputMode: "email", auto: "email" })}
          {field("whatsapp", "WhatsApp", { inputMode: "tel", auto: "tel" })}
          {field("cpf", "CPF", { inputMode: "numeric", className: "sm:col-span-2" })}
        </div>
      </fieldset>
      <fieldset className="rounded-2xl bg-card p-5 shadow-card">
        <legend className="mb-4 font-serif text-xl">2. Endereço de entrega</legend>
        <div className="grid grid-cols-6 gap-4">
          {field("cep", "CEP", { inputMode: "numeric", className: "col-span-6 sm:col-span-2", auto: "postal-code" })}
          <p className="col-span-6 -mt-2 text-xs text-muted-foreground sm:col-span-4 sm:mt-8">
            {cepStatus === "loading" ? "Buscando endereço..." : cepStatus === "error" ? "CEP não encontrado, preencha manualmente." : "O endereço é preenchido automaticamente."}
          </p>
          {field("street", "Rua", { className: "col-span-6 sm:col-span-4" })}
          {field("number", "Número", { inputMode: "numeric", className: "col-span-2" })}
          {field("complement", "Complemento", { className: "col-span-4 sm:col-span-6" })}
          {field("district", "Bairro", { className: "col-span-6 sm:col-span-2" })}
          {field("city", "Cidade", { className: "col-span-4 sm:col-span-3" })}
          {field("state", "UF", { className: "col-span-2 sm:col-span-1" })}
        </div>
      </fieldset>
    </>
  );
}
