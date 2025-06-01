import Sentencer from 'sentencer';

export default async function generateIndicator() {
    const pluralNoun = Sentencer.make("{{ nouns }}"); 
    const adjective = Sentencer.make("{{ adjective }}"); 

    return `${adjective} ${pluralNoun}`;
}