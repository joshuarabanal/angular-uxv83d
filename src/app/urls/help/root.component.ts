import { Component } from "@angular/core";
import { Context } from "../../mockAndroid/Context";

@Component({
  selector: "help-page-root",
  templateUrl: "./help-page.component.html",
  styleUrls: ["./help-page.component.css"]
})
export class HelpPage {
  async ngOnInit() {
    this.text.actionBar = await Context.getString("help.action_bar"); //Help me Use this App
    this.text.subtitle =await Context.getString("help.subtitle"); //What can we help you use?
    this.text.enter_note =await Context.getString("help.enter_note"); //Entering a Note
    this.text.edit_note =await Context.getString("help.edit_note"); //Edit a Note
    this.text.share_music =await Context.getString("help.share_music"); //Share Music
    this.text.open_music =await Context.getString("help.open_music"); //Open Music
    this.text.style_notes =await Context.getString("help.style_notes"); //Style Notes and Songs
    this.text.play_songs = await Context.getString("help.play_songs"); //Play Your Songs
  }
  public text = {
    actionBar: null, //Help me Use this App
    subtitle: null, //What can we help you use?
    enter_note: null, //Entering a Note
    edit_note: null, //Edit a Note
    share_music: null, //Share Music
    open_music: null, //Open Music
    style_notes: null, //Style Notes and Songs
    play_songs: null //Play Your Songs
  };
}
