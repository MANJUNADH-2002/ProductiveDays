package GraphImplimentation;

public class Runner {

	public static void main(String[] args) {
		Graph graph=new Graph();
		graph.addVertex(1);
		graph.addVertex(2);
		graph.addVertex(3);
		graph.addVertex(4);
		graph.addEdge(1, 3);
		graph.addEdge(1, 2);
		graph.addEdge(2, 4);
		graph.addEdge(4, 3);
		graph.bfs(1);
	}

}
