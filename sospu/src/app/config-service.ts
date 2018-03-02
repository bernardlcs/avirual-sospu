export class ConfigService {
  private urlService : string;

  constructor(){
    this.urlService = "";

  }

  getUrlService(){
    return this.urlService;
  }

}
