

"use server";
 
export async function login(nome, senha) {
    console.log("Estou no Servidor....");
 
    if (nome === "admin" && senha === "123") {
        console.log("Dados Corretos...");
        return { success: true };
    }
 
    return { error: "Login inválido" };
}