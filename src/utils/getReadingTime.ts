import stripHTML from "./stripHTML";

export default function calculateReadingTime(text: string, wordsPerMinute: number = 200): string {
    const stripped = stripHTML(text)
    const wordCount = stripped.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
  
    if (minutes <= 1) {
      return 'Menos de 1 min';
    } else {
      return `${minutes} min`;
    }
  }