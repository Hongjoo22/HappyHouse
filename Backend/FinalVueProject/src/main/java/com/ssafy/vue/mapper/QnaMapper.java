package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.vue.dto.ListParameterDto;
import com.ssafy.vue.dto.QnaDto;

public interface QnaMapper {
	List<QnaDto> selectQna(ListParameterDto listParameterDto) throws SQLException;
	QnaDto selectQnaByNo(int no) throws SQLException;
	int insertQna(QnaDto qnaDto) throws SQLException;
	int updateQna(QnaDto qnaDto) throws SQLException;
	int qnaAnswered(int no) throws SQLException;
	int deleteQna(int no) throws SQLException;
	int getTotalCount(ListParameterDto listParameterDto) throws SQLException;
}
