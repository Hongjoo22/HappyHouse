package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.CommentDto;

@Mapper
public interface CommentMapper {
	List<CommentDto> selectComment(int qnano) throws SQLException;
	CommentDto selectCommentById(int commentid) throws SQLException;
	int insertComment(CommentDto commentDto) throws SQLException;
	int updateComment(CommentDto commentDto) throws SQLException;
	int deleteComment(int commentid) throws SQLException;
}
