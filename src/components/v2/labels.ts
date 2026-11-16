import type { Language } from "@/data/websiteCopy";

/** Small set of extra strings used only by the v2 "Editorial" design. */
export interface V2Labels {
  students: string;
  schools: string;
  countries: string;
  replay: string;
  classHour: string;
  kicker: string;
  figVideo: string;
  readPaper: string;
  thanksTitle: string;
  thanksBody: string;
  sendAnother: string;
  formIntro: string;
  menu: string;
  close: string;
  backing: string;
  contact: string;
  play: string;
}

export const v2Labels: Record<Language, V2Labels> = {
  en: {
    students: "students in the national pilot",
    schools: "secondary schools, Luxembourg",
    countries: "European countries on the board",
    replay: "of students volunteered to play again",
    classHour: "one class period",
    kicker: "An educational board game",
    figVideo: "Gameplay, Mobility Era classroom edition",
    readPaper: "Read the working paper",
    thanksTitle: "Thank you — we've received your inquiry.",
    thanksBody:
      "Our team will reply within 24 hours with the pilot kit specifications, the teacher's guide and a proposal for your school.",
    sendAnother: "Send another message",
    formIntro: "Tell us about your school and we'll send the competency mapping and pilot options.",
    menu: "Menu",
    close: "Close",
    backing: "Institutional backing",
    contact: "Contact",
    play: "Play",
  },
  fr: {
    students: "élèves dans le pilote national",
    schools: "lycées au Luxembourg",
    countries: "pays européens sur le plateau",
    replay: "des élèves ont voulu rejouer",
    classHour: "une heure de cours",
    kicker: "Un jeu de plateau éducatif",
    figVideo: "Partie en classe, édition Mobility Era",
    readPaper: "Lire le document de travail",
    thanksTitle: "Merci — nous avons bien reçu votre demande.",
    thanksBody:
      "Notre équipe vous répondra sous 24 heures avec les spécifications du kit pilote, le guide de l'enseignant et une proposition pour votre établissement.",
    sendAnother: "Envoyer un autre message",
    formIntro: "Parlez-nous de votre établissement et nous vous enverrons la cartographie des compétences et les options pilotes.",
    menu: "Menu",
    close: "Fermer",
    backing: "Soutien institutionnel",
    contact: "Contact",
    play: "Lire",
  },
  de: {
    students: "Schüler im nationalen Pilotprojekt",
    schools: "Sekundarschulen in Luxemburg",
    countries: "europäische Länder auf dem Spielbrett",
    replay: "der Schüler wollten erneut spielen",
    classHour: "eine Unterrichtsstunde",
    kicker: "Ein pädagogisches Brettspiel",
    figVideo: "Spielablauf, Mobility Era Klassenzimmer-Edition",
    readPaper: "Working Paper lesen",
    thanksTitle: "Vielen Dank — wir haben Ihre Anfrage erhalten.",
    thanksBody:
      "Unser Team meldet sich innerhalb von 24 Stunden mit den Spezifikationen des Pilot-Sets, dem Lehrerhandbuch und einem Angebot für Ihre Schule.",
    sendAnother: "Weitere Nachricht senden",
    formIntro: "Erzählen Sie uns von Ihrer Schule – wir senden Ihnen das Kompetenz-Mapping und die Pilotoptionen.",
    menu: "Menü",
    close: "Schließen",
    backing: "Institutionelle Unterstützung",
    contact: "Kontakt",
    play: "Abspielen",
  },
  it: {
    students: "studenti nel progetto pilota nazionale",
    schools: "scuole secondarie in Lussemburgo",
    countries: "paesi europei sul tabellone",
    replay: "degli studenti ha chiesto di rigiocare",
    classHour: "un'ora di lezione",
    kicker: "Un gioco da tavolo educativo",
    figVideo: "Partita in classe, edizione Mobility Era",
    readPaper: "Leggi il working paper",
    thanksTitle: "Grazie — abbiamo ricevuto la tua richiesta.",
    thanksBody:
      "Il nostro team risponderà entro 24 ore con le specifiche del kit pilota, la guida per l'insegnante e una proposta per la tua scuola.",
    sendAnother: "Invia un altro messaggio",
    formIntro: "Raccontaci della tua scuola e ti invieremo la mappatura delle competenze e le opzioni pilota.",
    menu: "Menu",
    close: "Chiudi",
    backing: "Sostegno istituzionale",
    contact: "Contatti",
    play: "Riproduci",
  },
  ro: {
    students: "elevi în proiectul pilot național",
    schools: "școli secundare din Luxemburg",
    countries: "țări europene pe tabla de joc",
    replay: "dintre elevi au vrut să joace din nou",
    classHour: "o oră de curs",
    kicker: "Un joc de societate educațional",
    figVideo: "Joc în clasă, ediția Mobility Era",
    readPaper: "Citește lucrarea",
    thanksTitle: "Mulțumim — am primit solicitarea dvs.",
    thanksBody:
      "Echipa noastră vă va răspunde în 24 de ore cu specificațiile kitului pilot, ghidul profesorului și o propunere pentru școala dvs.",
    sendAnother: "Trimite alt mesaj",
    formIntro: "Spuneți-ne despre școala dvs. și vă trimitem harta competențelor și opțiunile de pilotare.",
    menu: "Meniu",
    close: "Închide",
    backing: "Sprijin instituțional",
    contact: "Contact",
    play: "Redă",
  },
  es: {
    students: "estudiantes en el piloto nacional",
    schools: "escuelas secundarias en Luxemburgo",
    countries: "países europeos en el tablero",
    replay: "de los estudiantes quiso volver a jugar",
    classHour: "una hora de clase",
    kicker: "Un juego de mesa educativo",
    figVideo: "Partida en clase, edición Mobility Era",
    readPaper: "Leer el documento de trabajo",
    thanksTitle: "Gracias — hemos recibido tu solicitud.",
    thanksBody:
      "Nuestro equipo responderá en 24 horas con las especificaciones del kit piloto, la guía docente y una propuesta para tu centro.",
    sendAnother: "Enviar otro mensaje",
    formIntro: "Cuéntanos sobre tu centro y te enviaremos el mapa de competencias y las opciones de pilotaje.",
    menu: "Menú",
    close: "Cerrar",
    backing: "Respaldo institucional",
    contact: "Contacto",
    play: "Reproducir",
  },
};

export const PILOT_PDF = "/docs/mobility-era-pilot-study-unu-merit.pdf";

export const toTitle = (s: string) =>
  s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s;
