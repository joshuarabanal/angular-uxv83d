import { Template } from "./template";

export class PlaySong extends Template {
  static readonly query = "play_song";

  template = this.getURL(PlaySong.query, "en");

  template_de = this.getURL(PlaySong.query, "de");
  template_en = this.template;
  template_es = this.getURL(PlaySong.query, "es");
  //template_it = this.getURL("enter_note", "it");
  template_pt = this.getURL(PlaySong.query, "pt");
  template_ru = this.getURL(PlaySong.query, "ru");
}
