## Hover

[[Cards]]

## List

Example of card lists

- **Lorem ipsum dolor sit amet**
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus.
	- [ ] Tarea
	- ![[Chainsaw Man (Manga) - Cover.webp|center|150]]
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor.
	- Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus. Quisque malesuada feugiat mi, eu laoreet purus auctor vitae.
	- ![[Pasted image 20240729015850.webp]]
- **Lorem ipsum dolor sit amet**
	- Lorem
		- Lorem
		- Lorem
			- Lorem
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor.
	- Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus. Quisque malesuada feugiat mi, eu laoreet purus auctor vitae.
	- ![[Chainsaw Man (Manga) - Cover.webp|100]] ![[Pasted image 20240729015850.webp]]
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor.
	- Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus. Quisque malesuada feugiat mi, eu laoreet purus auctor vitae.
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor.
	- Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus. Quisque malesuada feugiat mi, eu laoreet purus auctor vitae.
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor.

---

- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus.
- ### Lorem ipsum dolor sit amet
	- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus.

+ ### Lorem ipsum dolor sit amet
	+ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus.
+ ### Lorem ipsum dolor sit amet
	+ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus.

---

```dataview
LIST
WHERE
	contains(categoria, [[Videojuegos]])
SORT
	calificacion DESC
```

## Table

| Portada                               | Juego                   | Creador                | Año  | Rank |
| ------------------------------------- | ----------------------- | ---------------------- | ---- | ---- |
| ![[Pasted image 20240805181903.webp]] | Katana ZERO             | Askiisoft              | 2019 | 5.9  |
| ![[Pasted image 20240805181920.webp]] | Celeste                 | Maddy Makes Games Inc. | 2018 |      |
| ![[Pasted image 20240805181926.webp]] | Hotline Miami           |                        |      |      |
| ![[Pasted image 20240805181935.webp]] | Needy Streamer Overdose |                        |      |      |

## Portrait Table

|                                       |             |     |     |     |
| ------------------------------------- | ----------- | --- | --- | --- |
| ![[Pasted image 20240814150512.webp]] | Castlevania | a   | g   | l   |
| ![[Pasted image 20240814150519.webp]] | No          |     |     |     |
| ![[Pasted image 20240814150524.webp]] | Yes         |     |     |     |
| ![[Pasted image 20240814150536.webp]] |  No         |     |     |     |
| ![[Pasted image 20240814150536.webp]] | Castlevania |     |     |     |
| ![[Pasted image 20240814150536.webp]] | Castlevania |     |     |     |
| ![[Pasted image 20240814150536.webp]] |             |     |     |     |
| ![[Pasted image 20240814150536.webp]] |             |     |     |     |
| ![[Pasted image 20240814150536.webp]] |             |     |     |     |

## Dataview Table

*Ejemplo de tablas usando Dataview.*

```dataview
TABLE WITHOUT ID
	choice(
		contains(portada, "http"),
		"![|300](" + portada + ")",
		embed(link(portada, "300"))
	) AS Portada,
	link(file.link, file.aliases[0]) AS Titulo,
	creadores AS Creadores,
	año AS Año,
	calificacion AS Calificación
WHERE
	contains(en, [[Videojuegos]])
SORT
	calificacion DESC
```
