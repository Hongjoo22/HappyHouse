package com.ssafy.vue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {
		if(memberDto.getUserid() == null || memberDto.getUserpwd() == null)
			return null;
		return memberMapper.login(memberDto);
	}

	@Override
	public MemberDto userInfo(String userid) throws Exception {
		return memberMapper.userInfo(userid);
	}

	@Override
	public boolean register(MemberDto memberDto) throws Exception {
		return memberMapper.register(memberDto) == 1;
	}
	
	@Override
	public boolean idCheck(String userid) throws Exception {
		return memberMapper.idCheck(userid) == 0;
	}

	@Override
	public boolean userModify(MemberDto memberDto) throws Exception {
		return memberMapper.userModify(memberDto) == 1;
	}
	
	
}
