-- 현재 Oracle에 생성된 계정정보를 불러 온다.

SELECT * FROM ALL_users;

-- 새로운 계정 생성
CREATE USER NEWLECTURE identified by Oracle12345678;

-- 계정에 DB 접속 권한 
GRANT CREATE SESSION TO NEWLECTURE;

-- 계정에 TABLE 생성 권한
GRANT CREATE TABLE TO NEWLECTURE;

-- 계정에 VIEW 생성 권한
GRANT CREATE VIEW TO NEWLECTURE;