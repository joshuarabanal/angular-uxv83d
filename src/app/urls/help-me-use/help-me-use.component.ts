import { Component, OnInit } from "@angular/core";
import { EnterNote } from "./templates/enter_note";
import { EnterRest } from "./templates/enter_rest";
import { EditNote } from "./templates/edit_note";
import { ShareMusic } from "./templates/share_music";
import { OpenMusic } from "./templates/open_music";
import { AddStyle } from "./templates/add_style";
import { PlaySong } from "./templates/play_song";
//import { NotateRoot } from "../root/notate-root.component";

@Component({
  selector: "help-page-root",
  templateUrl: "./help-me-use.component.html",
  styleUrls: ["./help-me-use.component.css"]
})
export class HelpMeUsePage {
  private readonly query = "type=";
  type: string;
  steps = { title: "something", steps: [] };
  ngOnInit() {
    this.type = window.location.search;
    this.type = this.type.substring(
      this.type.indexOf(this.query) + this.query.length
    );
    if (this.type.indexOf("&") > 0) {
      this.type = this.type.substring(0, this.type.indexOf("&"));
    }
    this.setSteps();
  }

  public async setSteps() {
    console.log("set type called:" + this.type);

    switch (this.type) {
      case EditNote.query:
        this.steps = await new EditNote().getTemplate();
        break;
      case EnterNote.query:
        this.steps = await new EnterNote().getTemplate();
        break;
      case EnterRest.query:
        this.steps = await new EnterRest().getTemplate();
        break;
      case ShareMusic.query:
        this.steps = await new ShareMusic().getTemplate();
        break;
      case OpenMusic.query:
        this.steps = await new OpenMusic().getTemplate();
        break;
      case AddStyle.query:
        this.steps = await new AddStyle().getTemplate();
        break;
      case PlaySong.query:
        this.steps = await new PlaySong().getTemplate();
        break;
      default:
      //window.alert("unknonw type:" + this.type);
    }
    console.log("loaded steps:", this.steps);
    //window.alert("new steps:" + JSON.stringify(this.steps));
  }
}
