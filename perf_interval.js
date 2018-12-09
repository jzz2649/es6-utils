function perf_interval(callback){
	performance.mark('_start');
	function done(){
		performance.mark('_end');
		performance.measure('_count', '_start', '_end');
		const count = performance.getEntriesByName('_count');
		performance.clearMarks();
		performance.clearMeasures();
		return count[0];
		
	}
	callback(done);
}