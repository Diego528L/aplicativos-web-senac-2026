"use server";

export async function converterCelcius(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit.toFixed(2);
}
const teste = async () => {
  const resultado = await converterCelcius(25);
  console.log("Resultado do teste: " + resultado);
};
console.log("Teste Converter Celcius para Fahrenheit: " + converterCelcius());
teste();
return converterCelcius();
