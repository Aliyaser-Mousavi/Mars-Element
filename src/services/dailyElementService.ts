import { elementRepository } from "./elementService";
import { ChemicalElement } from "../types/element";

/**
 * Returns a consistent daily featured element based on the current calendar date.
 * Deterministic: Does not change during the day, changes at midnight.
 */
export function getElementOfTheDay(): {
  element: ChemicalElement;
  funFact: string;
} {
  const allElements = elementRepository.getAllElements();
  const today = new Date();

  // Calculate deterministic day index (epoch days)
  const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

  // Map to atomic number between 1 and 118
  const atomicNumber = (Math.abs(dayIndex) % allElements.length) + 1;
  const element =
    elementRepository.getByAtomicNumber(atomicNumber) || allElements[0];

  const funFact =
    element.additionalContent.funFactsFa[0] ||
    element.additionalContent.summaryFa ||
    element.identity.descriptionFa;

  return {
    element,
    funFact,
  };
}
