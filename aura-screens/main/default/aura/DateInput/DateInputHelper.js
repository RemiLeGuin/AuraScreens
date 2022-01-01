({
	setPlaceholder : function(component) {
		var placeholder;
		switch ($A.get("$Locale.userLocaleCountry")) {
			case "CZ": placeholder = "dd.mm.rrrr"; break;
			case "DE": placeholder = "tt.mm.jjjj"; break;
			case "ES": placeholder = "dd/mm/aaaa"; break;
			case "FR": placeholder = "jj/mm/aaaa"; break;
			case "IT": placeholder = "gg/mm/aaaa"; break;
			case "PL": placeholder = "dd.mm.rrrr"; break;
			case "PT": placeholder = "dd-mm-aaaa"; break;
			case "RO": placeholder = "zz.ll.aaaa"; break;
			default: placeholder = "";
		}
		component.set("v.placeholder", placeholder);
	}
})