
const verbs = [
	{
		verb: 'andar',
		translations: {
			nl: 'lopen / wandelen',
			en: 'to walk',
		},
		root: 'anduv'
	},
	{
		verb: 'decir',
		translations: {
			nl: 'zeggen',
			en: 'to say',
		},
		root: 'dij'
	},
	{
		verb: 'estar',
		translations: {
			nl: 'zijn',
			en: 'to be',
		},
		root: 'estuv'
	},
	{
		verb: 'hacer',
		translations: {
			nl: 'doen / maken',
			en: 'to do',
		},
		root: 'hic',
	},
	{
		verb: 'poder',
		translations: {
			nl: 'kunnen',
			en: 'to be able to',
		},
		root: 'pud'
	},
	{
		verb: 'poner',
		translations: {
			nl: 'zetten / leggen',
			en: 'to put',
		},
		root: 'pus'
	},
	{
		verb: 'querer',
		translations: {
			nl: 'willen',
			en: 'to want',
		},
		root: 'quis'
	},
	{
		verb: 'saber',
		translations: {
			nl: 'weten',
			en: 'to know',
		},
		root: 'sup'
	},
	{
		verb: 'tener',
		translations: {
			nl: 'hebben',
			en: 'to have',
		},
		root: 'tuv'
	},
	{
		verb: 'traer',
		translations: {
			nl: 'brengen',
			en: 'to bring',
		},
		root: 'traj'
	},
	{
		verb: 'venir',
		translations: {
			nl: 'komen',
			en: 'to come',
		},
		root: 'vin'
	},
]

const extensions = ['e','iste','o','imos','isteis','ieron']
const exceptions = ['hico', 'dijieron', 'trajieron'];
const corrections = ['hizo', 'dijeron', 'trajeron'];

const printAll = (lang = 'en') => {
	verbs.forEach(verb => printOne(verb, lang));
};

const printOne = (verb, lang = 'en') => {
	const conjugations = extensions.map(e => {
		const conjugation = verb.root + e;
		if (exceptions.includes(conjugation)) {
			return corrections[exceptions.indexOf(conjugation)] + ` (not: ${conjugation}!)`;
		} else {
			return conjugation;
		}
	});
	const printable = verb.translations[lang] + ':\n\t' + conjugations.join(', ');
	console.log('\n' + printable);
}

printAll('en');

