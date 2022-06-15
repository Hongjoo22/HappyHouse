package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.ListParameterDto;
import com.ssafy.vue.dto.StoreDto;


@Mapper
public interface StoreMapper {
	List<StoreDto> getStoreList(ListParameterDto listParameterDto) throws SQLException;
	int getTotalCount(ListParameterDto listParameterDto) throws Exception;
}
