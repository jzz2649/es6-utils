function perf_interval(callback){
	const get = () => Math.random().toString(36).slice(2);
	const start = get();
	const end = get();
	const count = get();
	performance.mark(start);
	function done(){
		performance.mark(end);
		performance.measure(count, start, end);
		const counts = performance.getEntriesByName(count);
		performance.clearMarks(start);
		performance.clearMarks(end);
		performance.clearMeasures(count);
		return counts[0];
		
	}
	callback(done);
}