import { test, expect } from "@playwright/test";

test("navega no site, abre a galeria e prepara contato pelo WhatsApp", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Cuidado que acolhe quem faz parte da sua família." })).toBeVisible();

  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Estrutura" }).click();
  await page.getByRole("button", { name: "Ampliar foto: Fachada" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("img", { name: "Fachada do Centro Médico Veterinário Bom Samaritano" }).last()).toBeVisible();
  await page.getByRole("button", { name: "Foto anterior" }).click();
  await page.keyboard.press("Escape");

  await page.getByRole("link", { name: "Contato", exact: true }).click();
  await expect(page.getByRole("link", { name: "Fale com o hospital pelo WhatsApp" })).toHaveAttribute("href", "https://wa.me/5532988397887");
  await page.getByLabel("Nome do tutor").fill("Ana");
  await page.getByLabel("Telefone", { exact: true }).fill("32999990000");
  await page.getByLabel("Nome do animal").fill("Luna");
  await page.getByLabel("Assunto").fill("Consulta");
  await page.getByLabel("Mensagem").fill("Gostaria de informações.");
  const whatsappPagePromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Enviar mensagem pelo WhatsApp" }).click();
  const whatsappPage = await whatsappPagePromise;
  await expect(whatsappPage).toHaveURL(/api\.whatsapp\.com\/send\/\?phone=5532988397887&text=/);
  await expect(whatsappPage.getByText(/Tutor: Ana/)).toBeVisible();
  await expect(page.getByRole("status")).toContainText("WhatsApp foi aberto");
  await expect(page.getByRole("link", { name: "Ligue agora" })).toHaveAttribute("href", "tel:+553232127252");
  await expect(page.getByRole("link", { name: "Abrir no Google Maps" })).toHaveAttribute("href", /google\.com\/maps\/search/);
});
