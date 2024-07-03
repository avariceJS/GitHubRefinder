export interface FilterCallback {
	(value: string): void
}

export interface SidebarProps {
	setLanguage: FilterCallback
	setPopularity: FilterCallback
	setDateAdded: FilterCallback
}

export interface PopularityFilterProps {
	setPopularity: FilterCallback
}

export interface LanguageFilterProps {
	setLanguage: FilterCallback
}

export interface DateAddedFilterProps {
	setDateAdded: FilterCallback
}
