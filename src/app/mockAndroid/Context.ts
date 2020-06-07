export class Context {
  private static stringSpecific: any;
  private static stringDefaults: any;

  public static getLanguageCode(): string {
    let language = navigator.language;
    if (language.indexOf("-") >= 0) {
      language = language.substring(0, language.indexOf("-"));
    }
    return language;
  }

  public static async getString(name: string): Promise<string> {
    if (Context.stringSpecific == null) {//n
      Context.stringSpecific = await (await fetch(
        "assets/res/values/" + Context.getLanguageCode() + ".json"
      )).json();
      Context.stringDefaults = await (await fetch(
        "assets/res/values/en.json"
      )).json();
    }

    let dir = name.split(".");
    let retu = Context.stringDefaults[dir[0]];
    let index = 1;
    while (retu != null && index < dir.length) {
      retu = retu[dir[index]];
      index++;
    }
    if (retu == null) {
      retu = Context.stringDefaults[dir[0]];
      index = 1;
      while (retu != null && index < dir.length) {
        retu = retu[dir[index]];
        index++;
      }
    }
    return retu;
  }
}
