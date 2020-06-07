import { Template } from "./template";

export class EnterRest extends Template {
  static readonly query = "enter_rest";

  template = this.getURL(EnterRest.query, "en");

  template_de = this.getURL(EnterRest.query, "de");
  template_en = this.template;
  template_es = this.getURL(EnterRest.query, "es");
  //template_it = this.getURL("enter_note", "it");
  template_pt = this.getURL(EnterRest.query, "pt");
  template_ru = this.getURL(EnterRest.query, "ru");
}
