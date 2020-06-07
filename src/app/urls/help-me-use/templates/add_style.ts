import { Template } from "./template";

export class AddStyle extends Template {
  static readonly query = "add_style";
  template = this.getURL("add_style", "en");

  template_de = this.getURL("add_style", "de");
  template_en = this.template;
  template_es = this.getURL("add_style", "es");
  template_pt = this.getURL("add_style", "pt");
  template_ru = this.getURL("add_style", "ru");
}
