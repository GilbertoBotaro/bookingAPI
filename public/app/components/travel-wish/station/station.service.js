/**
 * Created by ue69708 on 11.04.2017.
 */

export default class StationService {
    constructor($http, authService) {
        this.$http = $http
        this.authService = authService
    }

    getStations(query) {
        let headers = this.authService.getAuthHeader()
        return this.$http.get(`../redirect_api/locations?q=${query}`, {headers})
    }
}
