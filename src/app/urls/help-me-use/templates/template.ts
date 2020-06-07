export class Template {
  template: string = null;
  template_en: string = null;
  template_es: string = null;
  template_ru: string = null;
  template_pt: string = null;
  template_it: string = null;

  public getTemplate(
    language: string = navigator.language
  ): Promise<{ title: string; steps: any[] }> {
    if (language.indexOf("-") >= 0) {
      language = language.substring(0, language.indexOf("-"));
    }
    let retu = this.template;
    switch (language) {
      case "es":
        retu = this.template_es;
        break;

      case "en":
        retu = this.template_en;
        break;

      case "ru":
        retu = this.template_ru;
        break;

      case "pt":
        retu = this.template_pt;
        break;

      case "it":
        retu = this.template_es;
        break;
    }
    if (retu == null) {
      return this.fetchJson(this.template);
    }
    return this.fetchJson(retu);
  }

  private async fetchJson(
    url: string
  ): Promise<{ title: string; steps: any[] }> {
    let response = await fetch(url);
    return response.json();
  }

  public getURL(templateName: string, language: string): string {
    return "assets/json/help_me_use/" + templateName + "/" + language + ".json";
  }
}
