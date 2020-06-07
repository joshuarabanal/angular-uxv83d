import { Template } from "./template";

export class EditNote extends Template {
  static readonly query = "edit_note";
  template = this.getURL("edit_note", "en");

  template_de = this.getURL("edit_note", "de");
  template_en = this.template;
  template_es = this.getURL("edit_note", "es");
  template_it = this.getURL("edit_note", "it");
  template_pt = this.getURL("edit_note", "pt");
  template_ru = this.getURL("edit_note", "ru");
}
