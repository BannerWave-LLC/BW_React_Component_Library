# bw_react_component_library

Component Library for React

# installation

`npm i bannerwave_react_component_library`

Then...

```
    import { Button } from 'bannerwave_react_component_library'

    <Button>Best Button Ever</Button>

```


General Elements
	Button
Form Elements
	Input / Phone Number
	Checkbox
	Select ( Dropdown )
	Radio
	TextArea ( Combine with Input? )
	RichText 
	Toggle
	Avatar Upload
	SearchInput
// After CMS
Layout Elements
	Container
Blocks
	Gallery



Templates
	Nextjs / Redux / React Project Boilerplate
	
	
Documentation
	Project Folder Structure
		Next/Redux/React
			src 
				apollo ( graphql integrations )
				redux
					actions
					config
					reducers
				components
					blocks
					elements
					layouts
			public ( Static assets )
			pages ( Nextjs pages and app template )
	Naming Conventions
		React Component Capital Letter Camel Case ( SomeNameOfSOmething )
		Folder match Class name
		scss module same as classname but first letter lowercase
		main js file is index.js
		sub-components sit at same level as index.js
	Component Library
		CSS 
			Regular module ( Inside the component itelf )
			ClassName Attibute ( passing in classname as a prop )
			Global Classname ( accessable from anywhere in the app without module obfuscation )