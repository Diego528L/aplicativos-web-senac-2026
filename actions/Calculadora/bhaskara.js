"use server";

export async function calcularBhaskara(a, b, c) {
  console.log(`Iniciando cálculo para: ${a}x² + ${b}x + ${c} = 0`);

  // 1. Cálculo do Delta (Δ = b² - 4ac)
  const delta = Math.pow(b, 2) - 4 * a * c;
  console.log("Valor de Delta (Δ): " + delta);

  if (delta < 0) {
    return { error: "O Delta é negativo, logo não existem raízes reais." };
  }

  // 2. Cálculo de Bhaskara
  // x = (-b ± √Δ) / 2a
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`Raízes encontradas: x1 = ${x1}, x2 = ${x2}`);

  return {
    delta: delta,
    x1: x1.toFixed(2), // Limitando a 2 casas decimais
    x2: x2.toFixed(2)
  };
}

// teste
async function executarTeste() {
  // Exemplo: x² - 5x + 6 = 0 (Raízes devem ser 3 e 2)
  const resultado = await calcularBhaskara(1, -5, 6);
  console.log(resultado);
}

executarTeste();