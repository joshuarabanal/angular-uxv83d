import { Component } from "@angular/core";
import { Context } from "../../mockAndroid/Context";

@Component({
  selector: "notate-root",
  templateUrl: "./notate-root.component.html",
  styleUrls: ["./notate-root.component.css"]
})
export class NotateRoot {
  ngOnInit() {
    this.text.action_bar = Context.getString("root.action_bar");
    this.text.action_button = Context.getString("root.action_button");
    this.text.page1_title = Context.getString("root.page1_title");
    this.text.page1_body = Context.getString("root.page1_body");
    this.text.page2_title = Context.getString("root.page2_title");
    this.text.page2_subtitle = Context.getString("root.page2_subtitle");
    this.text.page2_body = Context.getString("root.page2_body");
    this.text.page3_title = Context.getString("root.page3_title");
    this.text.page3_body = Context.getString("root.page3_body");
    this.text.page4_title = Context.getString("root.page4_title");
    this.text.page4_body = Context.getString("root.page4_body");
    this.text.page5_title = Context.getString("root.page5_title");
    this.text.page5_body = Context.getString("root.page5_body");
    this.text.page6_title = Context.getString("root.page6_title");
    this.text.page6_body = Context.getString("root.page6_body");
  }
  public text = {
    action_bar: null, //Write Music
    action_button: null, //Download
    page1_title: null, //Make music happen where you are now
    page1_body: null /* With Notate, you can write music on the go. In the places that inspire you
    the most: at the park, at the coffe shop, or even in the shower(be careful
    not to get your phone wet). Simply type out your doodles and when you
    close the application the song will automatically be saved for you to
    complete later. No more writing on napkins or searching for a pen. Now
    your ideas wont get lost. They will be written as sheet music for later.*/,
    page2_title: null, //Notate is Really Simple
    page2_subtitle: null, //Enter notes as easily as you type a text message
    page2_body: null /*just type out the notes using the keyboard piano. All of the options you
    will need are right above the piano for you to choose from. you can even
    add style markings with the buttons on top of the keyboard.
    */,
    page3_title: null, //Play back your music to make more edits
    page3_body: null /*
    No longer are you composing with uncertainty. With Notate, you can play
    back your songs. Unlike with pen and paper, you are always sure you
    wrote down that melody or chord progression down correctly, because the
    phone played it back to you.
    */,
    page4_title: null, //Share your finished work with friends
    page4_body: null /* 
    When you have finished your work or would prefer to finish it on your
    computer, you can export your song and share it. You can share your song
    as a Midi, word Document or E-boook file.
    */,
    page5_title: null, //Get the App
    page5_body: null, //Download
    page6_title: null, //Help Using App
    page6_body: null //Help
  };
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
