import Sentencer from 'sentencer';

export default async function generateIndicator() {
    const pluralNoun = Sentencer.make("{{ nouns }}"); 
    const adjective = Sentencer.make("{{ adjective }}");

    const phrase = `${adjective} ${pluralNoun}`;

    const sentenceStumps = [
        `bringing back ${phrase}`, 
        `${phrase} becoming trendy`,
        `how ${phrase} are right now`,
    ];

    const randomIndex = Math.floor(Math.random() * 3);

    return sentenceStumps[randomIndex];
}