class HtmlControllerClass {
  async getHtml(req, res) {
    try {
      const response = await fetch(req.query.url);
      const html = await response.text();
      res.json({
        data: html,
      });
    } catch (error) {
      res.json({ message: "błąd" });
    }
  }
}
export const HtmlController = new HtmlControllerClass();
