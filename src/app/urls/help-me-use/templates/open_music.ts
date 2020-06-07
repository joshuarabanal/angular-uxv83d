import { Template } from "./template";

export class OpenMusic extends Template {
  static readonly query = "open_music";

  template = this.getURL(OpenMusic.query, "en");

  template_de = this.getURL(OpenMusic.query, "de");
  template_en = this.template;
  template_es = this.getURL(OpenMusic.query, "es");
  //template_it = this.getURL("enter_note", "it");
  template_pt = this.getURL(OpenMusic.query, "pt");
  template_ru = this.getURL(OpenMusic.query, "ru");
}
