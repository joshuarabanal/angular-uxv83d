import { Template } from "./template";

export class ShareMusic extends Template {
  static readonly query = "share_music";

  template = this.getURL(ShareMusic.query, "en");

  template_de = this.getURL(ShareMusic.query, "de");
  template_en = this.template;
  template_es = this.getURL(ShareMusic.query, "es");
  //template_it = this.getURL("enter_note", "it");
  template_pt = this.getURL(ShareMusic.query, "pt");
  template_ru = this.getURL(ShareMusic.query, "ru");
}
