export class Recipe {
  

  constructor(private name: string, private description: string, private imagePath: string) {
      this.name = name;
      this.description = description;
      this.imagePath = imagePath;
  }
}
