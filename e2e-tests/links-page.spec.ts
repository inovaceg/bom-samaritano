import { test, expect } from "@playwright/test";

test("abre os links oficiais para avaliação e WhatsApp", async ({ page }) => {
  await page.goto("/links");

  await expect(page.getByRole("heading", { name: "Centro Médico Veterinário Bom Samaritano" })).toBeVisible();
  const googleLink = page.getByRole("link", { name: /Avalie-nos no Google/ });
  await expect(googleLink).toHaveAttribute("href", "https://www.google.com/maps/place/Centro+M%C3%A9dico+Veterin%C3%A1rio+Bom+Samaritano/@-21.742663,-43.3547469,17z/data=!3m1!4b1!4m6!3m5!1s0x989d63dee1cc95a:0xc27920ee6bb49897!8m2!3d-21.742663!4d-43.352172!16s%2Fg%2F11fq_bzgcw?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D");
  await expect(googleLink).toHaveAttribute("target", "_blank");

  const whatsappLink = page.getByRole("link", { name: /Fale conosco/ });
  await expect(whatsappLink).toHaveAttribute("href", /https:\/\/wa\.me\/553232127252\?text=/);
  await expect(whatsappLink).toHaveAttribute("target", "_blank");
});
