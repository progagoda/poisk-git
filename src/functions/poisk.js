export const graphjs = {
	"Рига": ['С.Петербург', 'Каунас', 'Таллинн'],
	"С.Петербург": ['Москва', 'Мурманск', 'Калининград', 'Витебск'],
	"Москва": ['Ниж.Новгород', 'Донецк', 'С.Петербург', 'Казань', 'Минск', 'Орел'],
	"Ниж.Новгород": ['Витебск'],
	"Витебск": ['Воронеж', 'Орел', 'Брест', 'Вильнюс'],
	"Воронеж": ['Волгоград', 'Ярославль'],
	"Волгоград": ['Житомир'],
	"Житомир": [],
	"Донецк": ['Кишинев', 'Орел'],
	"Кишинев": ['Киев'],
	"Киев": ['Одесса', 'Харьков'],
	"Одесса": [],
	"Харьков": ['Симферополь'],
	"Симферополь": [],
	"Орел": [],
	"Мурманск": [],
	"Калининград": ['Брест'],
	"Брест": ['Вильнюс'],
	"Вильнюс": ['Даугавпилс', 'Каунас'],
	"Даугавпилс": [],
	"Каунас": [],
	"Ярославль": ['Минск'],
	"Минск": [],
	"Казань": ['Уфа'],
	"Уфа": ['Самара'],
	"Таллинн": [],
	"Самара": ['Уфа'],
}
export var nodes = [];
function dfs(graph, v, t) {
	console.log(9)
	// graph - смежный список
	// v - посещенный узел (вершина)
	// t - пункт назначения

	// это общие случаи
	// либо достигли пункта назначения, либо уже посещали узел
	if (v === t) return true
	if (nodes.includes(v)) return false

	// помечаем узел как посещенный
	nodes.push(v)
	// исследуем всех соседей (ближайшие соседние вершины) v
	let reached;
	for (let neighbor of graph[v]) {
		// если сосед не посещался
		if (!nodes.includes(neighbor)) {
			// двигаемся по пути и проверяем, не достигли ли мы пункта назначения
			reached = dfs(graph, neighbor, t)
			// возвращаем true, если достигли
			if (reached) { reached = true;  return true }
		}
	}
	// если от v до t добраться невозможно
	return false
}
function bfs(adj, s, t) {
	console.log(9)
	// adj - смежный список
	// s - начальная вершина
	// t - пункт назначения
	// инициализируем очередь
	let queue = []
	// добавляем s в очередь
	queue.push(s)
	// помечаем s как посещенную вершину во избежание повторного добавления в очередь
	nodes.push(s)
	while (queue.length > 0) {
		// удаляем первый (верхний) элемент из очереди
		let v = queue.shift()
		// abj[v] - соседи v
		for (let neighbor of adj[v]) {
			// если сосед не посещался
			if (!nodes.includes(neighbor)) {
				// добавляем его в очередь
				queue.push(neighbor)
				// помечаем вершину как посещенную
				nodes.push(neighbor)
				// если сосед является пунктом назначения, мы победили
				if (neighbor === t) {  return true }
			}
		}
	}
	// если t не обнаружено, значит пункта назначения достичь невозможно
	return false
}
function dls(graph, v, t,limit) {
	// graph - смежный список
	// v - посещенный узел (вершина)
	// t - пункт назначения

	// это общие случаи
	// либо достигли пункта назначения, либо уже посещали узел
	if (v === t) return true
	if (nodes.includes(v)) return false

	// помечаем узел как посещенный
	nodes.push(v)
	// исследуем всех соседей (ближайшие соседние вершины) v
	let reached;
	for (let neighbor of graph[v]) {
		// если сосед не посещался
		if (!nodes.includes(neighbor)) {
			// двигаемся по пути и проверяем, не достигли ли мы пункта назначения
			if(limit===5) {neighbor=nodes[1]; limit=0;}
			console.log(limit)
			limit++;
			reached = dls(graph, neighbor, t,limit)
			// возвращаем true, если достигли
			if (reached) { reached = true;  return true }
		}
	}
	// если от v до t добраться невозможно
	return false
}
function idfs(graph, v, t,limit) {
	limit++;
	// graph - смежный список
	// v - посещенный узел (вершина)
	// t - пункт назначения
     
	// это общие случаи
	// либо достигли пункта назначения, либо уже посещали узел
	if (v === t) return true
	if (nodes.includes(v)) return false

	// помечаем узел как посещенный
	nodes.push(v)
	// исследуем всех соседей (ближайшие соседние вершины) v
	let counter=2
	let reached;
	for (let neighbor of graph[v]) {
		// если сосед не посещался
		if (!nodes.includes(neighbor)) {
			// двигаемся по пути и проверяем, не достигли ли мы пункта назначения
			if(limit===counter) {counter+=1; limit=-1;console.log(limit); neighbor=nodes[limit]}
			reached = dls(graph, neighbor, t,limit)
			// возвращаем true, если достигли
			if (reached) { reached = true;  return true }
		}
	}
	// если от v до t добраться невозможно
	return false
}
function bdfs(graph, v, t) {
	console.log(9)
	if (v === t) return true
	if (nodes.includes(v)) return false
	nodes.push(v)
	for (let neighbor of graph[v]) {
		// если сосед не посещался
		if (!nodes.includes(neighbor)) {
			console.log(nodes)
			if (neighbor=="Самара") return "Казань"
			return neighbor
			
		}
	}
}
function bds(graph, v, t) {
	let poisk1=v
	let poisk2=t;
	while(poisk1!==poisk2){
		console.log(12)
		poisk1 = bdfs(graph,poisk1,poisk2)
		poisk2 = bdfs(graph,poisk2,poisk1)
			
		}
	}

export function choosePoisk(poisk, graph, start, finish) {
	if (poisk === '1') { nodes = []; dfs(graph, start, finish) }
	if (poisk === '2') { nodes = []; bfs(graphjs, start, finish) }
	if (poisk === '3') {nodes = [];  dls(graphjs, start, finish,0) }
	if (poisk === '4') {nodes = [];  idfs(graphjs, start, finish,0) }
	if (poisk === '5') {nodes = [];  bds(graphjs, start, finish) }
	if (poisk === '6'){console.log('HI')}
}