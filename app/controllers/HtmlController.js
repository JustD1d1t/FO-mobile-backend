import axios from "axios";

class HtmlControllerClass {
  async getHtml(req, res) {
    try {
      const response = await axios.get(req.query.url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });
      res.json({ data: response.data });
    } catch (error) {
      res.json({ message: "błąd" });
    }
  }
  async getPDF(req, res) {
    try {
      const response = await axios.get(req.query.url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
        responseType: "arraybuffer",
      });
      res.set("Content-Type", "application/pdf");
      res.send(response.data);
    } catch (error) {
      res.json({ message: "błąd" });
    }
  }
}
export const HtmlController = new HtmlControllerClass();
