package GraphImplimentation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class Graph {
 private Map<Integer,List<Integer>> adjList;
 public Graph() {
	 adjList=new HashMap<>();
 }
 public void addVertex(int v) {
	 adjList.putIfAbsent(v,new ArrayList<>());
 }
 public void addEdge(int v,int u) {
	 adjList.get(v).add(u);
	  // For undirected: adjList.get(v).add(u); u should also add

 }
 public void printGraph() {
	 for(int v:adjList.keySet()) {
		 System.out.print(v+" -->");
		 for(int u:adjList.get(v)) {
			 System.out.print(u+" -->");
		 }
		 System.out.println();
		 
	 }
 }
 public void bfs(int start) {
	 Set<Integer> visited=new HashSet<>();
	 Queue<Integer> queue=new LinkedList<>();
	 
	 visited.add(start);
	 queue.add(start);
	 System.out.print("BFS Treversal Starting From Node"+start+": ");
	 while(!queue.isEmpty()) {
		 int current=queue.poll();
		 System.out.print(current+" ");
		 for(int neigbor:adjList.getOrDefault(current,new ArrayList<>())) {
			 if(!visited.contains(neigbor)) {
				 visited.add(neigbor);
				 queue.add(neigbor);
			 }
		 }
	 }
	 System.out.println();
 }
 
 }
 

