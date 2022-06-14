package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;

public interface HouseMapService {

	List<SidoGugunCodeDto> getSido() throws Exception;
	List<SidoGugunCodeDto> getGugunInSido(String sido) throws Exception;
	List<HouseInfoDto> getDongInGugun(String gugun) throws Exception;
//	PageNavigation makePageNavigation(String pg, String key, String word) throws Exception;
	List<HouseInfoDto> getAptRankInDong(String dongCode, String key, String lat, String lng) throws Exception;
	List<HouseInfoDto> getSearchList(String pg, String key, String word, String lat, String lng);
	int getTotalCount(String key, String word) throws Exception;
}
