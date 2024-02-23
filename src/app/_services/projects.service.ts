import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      title: 'Ita Challenges',
      pictures: [
        '../../assets/ita/ita-challenges-1.png',
        '../../assets/ita/ita-challenges-2.png',
        '../../assets/ita/ita-challenges-3.png',
      ],
      projectLink: 'https://github.com/IT-Academy-BCN/ita-challenges-backend',
      subtitle: 'Web project for carrying out programming challenges.',
      description:
        'Collaborator in the project based on microservices in different Docker containers. A project with a large work team, using the SCRUM methodology for correct development.',
      tags: [Tag.JAVA, Tag.SPRING, Tag.DOCKER, Tag.GIT, Tag.JUNIT],
    },
    {
      id: 1,
      title: 'Dice Game GUI',
      pictures: [
        '../../assets/Joc-daus-thymeleaf/Daus-1.png',
        '../../assets/Joc-daus-thymeleaf/Daus-2.png',
        '../../assets/Joc-daus-thymeleaf/Daus-3.png',
        '../../assets/Joc-daus-thymeleaf/Daus-4.png',
        '../../assets/Joc-daus-thymeleaf/Daus-5.png',
        '../../assets/Joc-daus-thymeleaf/Daus-6.png',
      ],
      projectLink:
        'https://github.com/AdriaMartiComas/Joc-Daus-GUI/tree/master',
      subtitle:
        'Gambling game web app where users can compete between them. With grafic interface',
      description:
        'Project built to learn several technologies like Java, Spring Boot, MySQL, and Thymeleaf. The game itself is really simple, designed to feed data to the database and then perform different actions with this data, such as creating and deleting users, playing the game as a user, viewing games played by users, and seeing the best and worst ratios between users.',
      tags: [Tag.JAVA, Tag.SPRING, Tag.SQL, Tag.THYMELEAF],
    },

    {
      id: 2,
      title: 'Dice Game Security',
      pictures: [
        '../../assets/Joc-daus-thymeleaf/JWT.png',
        '../../assets/Joc-daus-thymeleaf/JWT-explain.png',
        '../../assets/Joc-daus-thymeleaf/partides.png',
        '../../assets/Joc-daus-thymeleaf/usuaris.png',
      ],
      projectLink: 'https://github.com/AdriaMartiComas/Juego-Dados-Security',
      subtitle:
        'Gambling game RESTful API where users can compete between them. With JWT security.',
      description:
        "Version 2 of 'Gambling Game GUI' incorporating JSON Web Token security to explore the handling of JWT tokens for authentication and authorization of requests.",
      tags: [Tag.JAVA, Tag.SPRING, Tag.REST, Tag.JWT, Tag.SQL],
    },
    {
      id: 3,
      title: 'Comerç Ideal',
      pictures: [
        '../../assets/Comercio/Comercio1.png',
        '../../assets/Comercio/Comercio2.png',
        '../../assets/Comercio/Comercio3.png',
        '../../assets/Comercio/Comercio4.png',
      ],
      projectLink: 'https://github.com/abde7h/backcomer-ideal',
      subtitle:
        'Project for the Jump2Digital hackathon: Commercial Property Management Application.',
      description:
        'This application is designed to manage physical retail spaces available for rent. Leveraging a database of vacant establishments, it provides users with optimal leasing options based on the type of business they intend to establish in the selected location. The app streamlines the process of finding and securing suitable commercial spaces, offering a tailored solution for businesses seeking the ideal premises for their operations.',
      tags: [Tag.JAVA, Tag.SPRING_BOOT, Tag.SQL, Tag.PYTHON],
    },
    {
      id: 4,
      title: 'Raspberry pi Router',
      pictures: [
        '../../assets/raspberry/openwrt.png',
        '../../assets/raspberry/raspberry-router-parts.JPG',
        '../../assets/raspberry/antenaJPG.JPG',
      ],
      projectLink: '//www.github.com',
      subtitle:
        'Raspberry Pi router with modem-hat, powered by OpenWRT for versatile networking.',
      description:
        "The Raspberry Pi router features the WaveShare SIM7600 LTE modem HAT, configured via UART using Minicom. Raspberry Pi's Ethernet port delivers download and upload speeds of up to 20 Mbps in rural areas, ensuring stable and fast connectivity in remote environments.",
      tags: [Tag.PI, Tag.LINUX, Tag.SHELL, Tag.PYTHON],
    },

    {
      id: 5,
      title: 'Raspberry pi Plotter',
      pictures: [
        '../../assets/raspberry/plotter-screen.png',
        '../../assets/raspberry/Raspberry-in.JPG',
        '../../assets/raspberry/SIM7600X.JPG',
        '../../assets/raspberry/Raspberry-GPS.JPG',
        '../../assets/raspberry/Plotter.jpg',
        '../../assets/raspberry/sail.JPG'
      ],
      projectLink: '//www.github.com',
      subtitle: 'A digital navigation chart system for maritime vessels.',
      description:
        'Installed on my 6.5m sailboat, the Raspberry Pi Plotter combines cutting-edge technologies. It integrates a Raspberry Pi, GPS module for precise positioning, and a touchscreen display for interactive navigation. The system employs software like OpenCPN, offering detailed digital charts. NMEA 0183 communication ensures seamless integration with onboard instruments, providing real-time data. This compact setup enhances navigation, making it an efficient and reliable tool for maritime journeys.',
      tags: [Tag.PI, Tag.LINUX, Tag.SHELL, Tag.PYTHON],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      return new TypeError('Project not found');
    } else {
      return project;
    }
  }
}
