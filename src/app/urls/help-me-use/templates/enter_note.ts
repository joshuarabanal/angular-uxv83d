import { Template } from "./template";

export class EnterNote extends Template {
  static readonly query = "enter_note";
  template = this.getURL(EnterNote.query, "en");

  template_de = this.getURL(EnterNote.query, "de");
  template_en = this.template;
  template_es = this.getURL(EnterNote.query, "es");
  //template_it = this.getURL("enter_note", "it");
  template_pt = this.getURL(EnterNote.query, "pt");
  template_ru = this.getURL(EnterNote.query, "ru");
}
