export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#DD0031');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#007ACC');
  static readonly HTML = new Tag('HTML', '#E44D26');
  static readonly CSS = new Tag('CSS', '#264DE4');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#F7DF1E');
  static readonly JAVA = new Tag('Java', '#007396');
  static readonly SPRING = new Tag('Spring', '#6DB33F');
  static readonly SQL = new Tag('SQL', '#CC2929');
  static readonly NO_SQL = new Tag('NoSQL', '#4DB33D');
  static readonly REST = new Tag('REST', '#00A6D6');
  static readonly GO = new Tag('Go', '#00ADD8');
  static readonly C = new Tag('C', '#A8B9CC');
  static readonly CSHARP = new Tag('C#', '#68217A');
  static readonly PYTHON = new Tag('Python', '#306998');
  static readonly MICROSERVICES = new Tag('Microservices', '#FFD43B');
  static readonly DOCKER = new Tag('Docker', '#2496ED');
  static readonly SCRUM = new Tag('Scrum', '#6DB33F');
  static readonly GIT = new Tag('Git', '#F05032');
  static readonly JUNIT = new Tag('JUnit', '#25A162');
  static readonly JWT = new Tag('JWT', '#6DB33F');
  static readonly SPRING_BOOT = new Tag('Spring Boot', '#6DB33F');
  static readonly THYMELEAF = new Tag('Thymeleaf', '#005F0F');
  static readonly PI = new Tag('Raspberry Pi', '#A22846');
  static readonly LINUX = new Tag('Linux', '#F5C616');
  static readonly SHELL = new Tag('Shell', '#4EAA25');


  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }
}
