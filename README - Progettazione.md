# Appunti sulla progettazione - Milestone 0

- **STORE**:
	- testo della searchbar vuota collegata all'input con un v-model - myString
	- mia API completa di tutte le sue parti, compresi i parametri dei film presenti nell'input

- **COMPONENTI PRESENTI**:
	1. App.vue
		- dovranno esserci le chiamate API 
			- **CHIAMATA API**: nel get passiamo i parametri, che sono:
				- query - la mia richiesta, quindi associerò la mia stringa
				- api_key= ... resto della mia API
				
	1. AppHeader.vue
		- searchbar

	2. AppMain.vue
		- contenitore principale di tutti i film

		4. AppOneMovie.vue in Main
			- il singolo componente film

	3. AppFooter.vue
		- per adesso vuoto
