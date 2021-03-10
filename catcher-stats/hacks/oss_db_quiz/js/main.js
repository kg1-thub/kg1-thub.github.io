'use strict';

{
    const question = document.getElementById('question');
    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2');
    const detailbtn = document.getElementById('detailbtn');
    const choices = document.getElementById('choices');
    const spinner = document.getElementById('spinner');
    const scoreLabel = document.getElementById('scoreLabel');

    const quizSet = [
        // Gold 運用管理
        {
            q: 'crypt関数の意味として、正しいものは次のうちどれか。', 
            c: [
                '対称鍵を指定して、データを暗号化する',
                'データのバイナリハッシュを計算する',
                'パスワードのハッシュ処理を行う',
                'データのハッシュ化MACを計算する',
                'パスワードハッシュ時に使用するランダムなソルト文字列を新規に作成する'
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_management_01/22_190731'
        },
        {
            q: '「mydb」テーブルのみに対して、更新/削除された行の切り詰めを行いたい。            VACUUMコマンドの使い方として正しいものは次のうちどれか。', 
            c: [
                'VACUUM mydb;',
                'VACUUM FULL mydb;',
                'VACUUM VERBOSE mydb;',
                'VACUUM;',
                'VACUUM -f mydb;',
            ],
            a: [1],
            d: 'https://oss-db.jp/sample/gold_management_01/21_190612'
        },
        {
            q: 'レプリケーション構成において、フェールオーバを実施する方法として正しいものは次のうちどれか。', 
            c: [
                'スレーブ側でrecovery.confのtrigger_fileパラメータで設定したトリガファイルを作成する',
                'マスタ側でrecovery.confのtrigger_fileパラメータで設定したトリガファイルを作成する',
                'postgresql.confで自動フェールオーバの設定をする',
                'pg_ctl promoteコマンドを実行する',
                'pg_hba.confの第2列目に、下記のようにレプリケーションの設定をする </br>                host    replication    postgres    192.168.1.2/32    trust',
            ],
            a: [0, 3],
            d: 'https://oss-db.jp/sample/gold_management_01/20_190515'
        },
        {
            q: 'ログローテート時に同じ名前のログファイルが存在する場合に、追記、上書きを設定する設定は次のうちどれか。', 
            c: [
                'log_min_error_statement',
                'log_rotation_age',
                'log_directory',
                'log_truncate_on_rotation',
                'log_connections',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_management_01/19_190328'
        },
        {
            q: '継続的アーカイブによるバックアップからの復旧を行う時に使用する設定ファイルについて、正しいものをひとつ選択してください。', 
            c: [
                'postgresql.conf',
                'pg_hba.conf',
                'pg_recovery.conf',
                'recovery.conf',
                'restore.conf',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_management_01/18_190212'
        },
        {
            q: 'バックアップに関して正しいものをすべて選択しなさい。', 
            c: [
                '通常はフルバックアップを取得するよりも、pg_basebackupによって更新差分を取得する方が処理時間は短い。',
                'recovery_target_timelineをデフォルト値で使用すると、ベースバックアップが取得された際のタイムラインへ回復する。',
                'pg_dumpコマンドによってpsqlコマンドでリストア可能な形式 として出力したバックアップファイルには、データベースを作成する SQLコマンドが含まれる場合がある。',
                'pg_dumpコマンドも、pg_restoreコマンドも並列実行することが可能であり、複数のデータベースのバックアップ・リストア処理を行う際は高速化が図れる。',
                'pg_restoreコマンドで--encodingオプションを使用すると、sjisで作成したダンプファイルをUTF8でリストアすることができる。',
            ],
            a: [1, 2, 3],
            d: 'https://oss-db.jp/sample/gold_management_01/16_170313'
        },
        {
            q: 'CLUSTERコマンドに関する説明として、適切ではないものを1つ選びなさい。', 
            c: [
                'CLUSTERコマンドによりテーブルデータが物理的に再編成され、読み込み性能が向上する可能性がある',
                'CLUSTERコマンドが実行されているテーブルに対する読み込みは待機される',
                'PRIMARY KEYが存在しないテーブルに対するCLUSTERコマンドは実行できない',
                'maintenance_work_memの値を大きくするとCLUSTERコマンドの性能が向上する可能性がある',
                'CLUSTERコマンドによりテーブルおよびインデックスサイズを削減できる可能性がある',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_management_01/15_150924'
        },
        {
            q: 'pg_basebackupコマンドに関する説明として、適切でないものを2つ選びなさい。', 
            c: [
                '別サーバで動作しているPostgreSQLデータベースクラスタのベースバックアップを取得できる',
                'pg_basebackupコマンドの実行前にpg_start_backupコマンドを実行する必要がある',
                'fetch方式の場合、max_wal_sendersパラメータを少なくとも1以上に設定する必要がある',
                'オプションを明示的に指定しないで実行した場合に、WALはバックアップに含まれる',
                'テーブル空間が追加で作成されている場合は、テーブル空間内のデータはバックアップに含まれない',
            ],
            a: [1, 4],
            d: 'https://oss-db.jp/sample/gold_management_01/11_150123'
        },
        {
            q: 'VACUUMに関して正しいものを全て選択しなさい。', 
            c: [
                'FULLオプションを付加すると、データベース全体の不要領域が回収される。',
                'VERBOSEオプションを付加すると、VACUUM処理の詳細な情報を取得することができる。',
                'AUTOオプションを付加すると、autovacuumの設定を用いてVACUUMが行われる。',
                'ANALYZEオプションを付加すると、統計情報の更新も行われる。',
                '一つのVACUUMコマンドに複数のテーブルを指定して実行することができる。',
            ],
            a: [1, 3],
            d: 'https://oss-db.jp/sample/gold_management_01/10_141027'
        },
        {
            q: 'ロングトランザクションによる弊害についての説明として、適切なものを２つ選びなさい。', 
            c: [
                'オンラインバックアップの取得ができなくなる',
                'VACUUMによる不要領域の回収ができなくなる。',
                'DBへの接続ができなくなる',
                '新たなトランザクションが開始できなくなる',
                'テーブルが長時間ロックされ、そのテーブルに対するDDLが完了しなくなる',
            ],
            a: [1,4],
            d: 'https://oss-db.jp/sample/gold_management_01/09_140812'
        },
        {
            q: 'VACUUMに関して正しいものを全て選択しなさい。', 
            c: [
                'VACUUMを実行するユーザが対象テーブルに対するVACUUMの実行権限を持っていない場合はエラーとなる。',
                'トランザクションブロック内でVACUUMを実施すれば、ROLLBACKによって処理を取り消すことができる。',
                'オプションが指定されていない通常のVACUUMでも、不要領域をOSに返還することがある。',
                '多数の行を追加または削除した場合は、VACUUM ANALYZEを実施すべきである。',
            ],
            a: [2,3],
            d: 'https://oss-db.jp/sample/gold_management_01/08_140702'
        },
        {
            q: 'ANALYZEに関して正しいものを全て選択しなさい。', 
            c: [
                '整列されたデータを昇順にロードした場合、ANALYZEを実施しなくとも最適なプランが作成される。',
                '自動バキュームデーモンがANALYZEを実施する場合がある。',
                'default_statistics_targetの値を大きくすると、ANALYZEの所要時間は短くなるがプランナの予測の品質は低下する。',
                '対象とするテーブルへのSHARE UPDATE EXCLUSIVEロックが取得される。',
                'PostgreSQLのANALYZE文は、標準SQLに準拠している。',
            ],
            a: [1,3],
            d: 'https://oss-db.jp/sample/gold_management_01/07_140307'
        },
        {
            q: '2台のサーバ(プライマリサーバ、スタンバイサーバ)でストリーミングレプリケーションを行い、スタンバイサーバをホットスタンバイとして運用する。', 
            c: [
                'プライマリサーバのpg_hba.confに、データベースフィールドを"replication"と指定した項目を設定する',
                'プライマリサーバのpostgresql.confに、"wal_level = hot_standby"を設定する',
                'スタンバイサーバのpostgresql.confに、"hot_standby = on"を設定する',
                'スタンバイサーバのpostgresql.confに、"standby_mode = on"を設定する',
                'スタンバイサーバのrecovery.confの"primary_conninfo"に、プライマリサーバへの接続情報(libpq接続文字列)を設定する',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_management_01/06_130619'
        },
        {
            q: 'データベースクラスタ配下の各サブディレクトリに保有されるデータの説明として、適切ではないものを1つ選びなさい。', 
            c: [
                'globalディレクトリにはデータベースクラスタ全体で共有するテーブルが保有される。',
                'pg_tblspcディレクトリにはテーブル空間により管理されるテーブルが保有される。',
                'pg_xactディレクトリにはトランザクションのコミット状態のデータが保有される。',
                'pg_walディレクトリにはWALファイルが保有される。',
                'pg_stat_tmpディレクトリには統計情報コレクタがバックエンドプロセスと必要な情報をやり取りするための一時ファイルが格納される。',
            ],
            a: [1],
            d: 'https://oss-db.jp/sample/gold_management_01/05_130510'
        },
        {
            q: '以下のSQL文でインデックスを定義し、100万行を挿入する。            CREATE INDEX member_index ON member_table (team_id, birthday);                        ここで、team_idのデータ型はINTEGER、birthdayのデータ型はDATE、いずれもNOT NULL制約が付いているものとする。            インデックスのファイルサイズ見積りとして最も適切なものを1つ選びなさい。            なお、1ブロックは8192バイトとし、FILLFACTORは90%とする。', 
            c: [
                '9メガバイト',
                '13メガバイト',
                '19メガバイト',
                '23メガバイト',
                '29メガバイト',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_management_01/04_130401'
        },
        {
            q: 'PostgreSQL のプロセス構造について、適切なものをすべて選びなさい。', 
            c: [
                'データベースに接続するクライアント一つ一つについて、別々のサーバプロセスが起動する。',
                'データベースクラスタ内のそれぞれのデータベースについて、別々のサーバプロセスが起動する。',
                'WAL ライタ、自動バキュームランチャ、統計情報コレクタなどいくつかのプロセスが動作しているが、いずれも postgres という同一の実行ファイルから作られるプロセスである。',
                'クライアントが接続していないときは、通常は postmaster というプロセスだけが動作している。',
                'データベースクラスタ1つに対して、postmaster というプロセスが1つ動作している。',
            ],
            a: [0,2,4],
            d: 'https://oss-db.jp/sample/gold_management_01/02_111130'
        },
        {
            q: '以下のSQL分でテーブルを定義し、50万行を挿入する。\n\r            CREATE TABLE registration (              id BIGINT PRIMARY KEY,              reg_event INTEGER NOT NULL,              reg_client INTEGER NOT NULL,              reg_date TIMESTAMP NOT NULL            );            テーブルのファイルサイズ見積りとして最も適切なものを1つ選びなさい。            1ブロックは8192バイトとし、インデックスのファイルサイズは含めないものとする。', 
            c: [
                '5メガバイト',
                '15メガバイト',
                '25メガバイト',
                '40メガバイト',
                '60メガバイト',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_management_01/01_120210'
        },
        // Gold 性能監視
        {
            q: `下記のEXPLAINの実行結果について、正しい記述を３つ選んでください。 
postgres=# EXPLAIN SELECT relname,nspname FROM pg_class left join pg_namespace ON (pg_class.relnamespace = pg_namespace.oid); 
QUERY PLAN 
------------------------------------------------------------------------- 
Hash Left Join  (cost=1.14..15.97 rows=288 width=128) 
Hash Cond: (pg_class.relnamespace = pg_namespace.oid) 
->  Seq Scan on pg_class  (cost=0.00..10.88 rows=288 width=68) 
->  Hash  (cost=1.06..1.06 rows=6 width=68) 
->  Seq Scan on pg_namespace  (cost=0.00..1.06 rows=6 width=68) 
(5 行)`, 
            c: [
                'このEXPLAINコマンドを実行すると、引数に指定したSQL文が実際に実行される',
                '計画ノードの「Hash Left Join」、「Seq Scan on pg_class」、「Seq Scan on pg_namespace」の記述は、プランナが自動選択した最適なデータ処理のアルゴリズムを示している',
                '「cost=〜」の部分は、処理にかかる実際の時間を示している',
                '「rows=〜」の部分は、それぞれの計画ノードを実行した際の推定の処理行数を示している',
                '「width=〜」の部分は、統計情報をもとに推測される1行あたりの平均のバイトサイズを示している',
            ],
            a: [1, 3, 4],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/16_190626'
        },
        {
            q: 'pg_stat_statementsの説明として正しいものは次のうちどれか。', 
            c: [
                'SQL文の実行に指定した時間以上かかった場合、それぞれのSQL文の実行に要した時間を記録する',
                'ロック待ちとなっているトランザクションや対象のテーブルを確認する',
                '実行された全てのSQL文の実行時の統計情報を記録する',
                'データベースあたり1行の形式でデータベース全体の情報を表示する',
                '現在のデータベースの各テーブルごとに1行の形で、テーブルへのアクセス統計情報を表示する',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/15_190529'
        },
        {
            q: 'pg_classに関する記述の中で、正しいものを2つ選びなさい。', 
            c: [
                'relpages列にはテーブル内の行数が格納されている',
                'pg_classはテーブルの情報のみを格納している',
                'pg_class内には常に最新の情報が格納されている',
                'relpages列の値は推測値である',
                'pg_classに格納されている統計情報は一部のDDLコマンドで更新される',
            ],
            a: [3, 4],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/14_190409'
        },
        {
            q: 'テーブルへのアクセスの統計情報を表示する方法として、正しいSQL文を選択してください。',
            c: [
                'SELECT * FROM pg_stat_activity;',
                'SELECT * FROM pg_stat_database;',
                'SELECT * FROM pg_stat_bgwriter;',
                'SELECT * FROM pg_stat_all_tables;',
                'SELECT * FROM pg_stat_all_indexes;', 
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/13_190226'
        },
        {
            q: 'pg_locksビューによって確認することが可能なロックの対象となるオブジェクトを全て選択しなさい。', 
            c: [
                'データベース',
                'リレーション',
                'タプル',
                'カラム',
                'パラメータ',
            ],
            a: [1, 2],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/12_170228'
        },
        {
            q: `EXPLAIN ANALYZE SELECT * FROM pgbench_accounts a
            JOIN pgbench_branches b ON (a.bid = b.bid) WHERE a.aid = 10000;
            上記問い合わせの実行計画(EXPLAIN ANALYZE)を確認したところ、下記の出力であった。
            
            QUERY PLAN
            
            -----------------------------------------------------------------------------------------------------------------------------------
            
            Nested Loop (cost=0.00..2891.02 rows=1 width=461) (actual time=4.589..64.393 rows=1 loops=1)
               Join Filter: (a.bid = b.bid)
               -> Seq Scan on pgbench_accounts a (cost=0.00..2890.00 rows=1 width=97) (actual time=4.555..64.356 rows=1 loops=1)
                     Filter: (aid = 10000)
                     Rows Removed by Filter: 99999
               -> Seq Scan on pgbench_branches b (cost=0.00..1.01 rows=1 width=364) (actual time=0.007..0.008 rows=1 loops=1)
            Total runtime: 64.557 ms
            (7 rows)
            
            上記問い合わせをより高速にするために行うこととして最も適切なものをひとつ選びなさい。
            なお、各テーブルの構成は下記のようになっている。
            
            ----------------------------------------------------
            
            Table "public.pgbench_accounts"
            Column	|	Type	|	Modifiers
            ----------	+	---------------	+	-----------
            aid	|	integer	|	not null
            bid	|	integer	|	 
            abalance	|	integer	|	 
            filler	|	character(84)	|	 
            ----------------------------------------------------
            
            ----------------------------------------------------
            
            Table "public.pgbench_branches"
            Column	|	Type	|	Modifiers
            ----------	+	---------------	+	-----------
            bid	|	integer	|	not null
            bbalance	|	integer	|	 
            filler	|	character(88)	|	 
            Indexes:
                "pgbench_branches_pkey" PRIMARY KEY, btree (bid)
            
            ----------------------------------------------------`, 
            c: [
                'pgbench_accountsのabalance列にインデックスを作成する',
                'pgbench_branchesのbid列にインデックスを作成する',
                'pgbench_accountsを対象にANALYZEを実行する',
                'pgbench_accountsのaid列にインデックスを作成する',
                'pgbench_branchesを対象にANALYZEを実行する',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/11_150324'
        },
        {
            q: 'EXPLAINコマンドで指定可能な出力形式のうち誤っているものを全て選択しなさい。', 
            c: [
                'JSON',
                'HTML',
                'CSV',
                'YAML',
                'XML',
            ],
            a: [1, 2],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/10_140812'
        },
        {
            q: `EXPLAINコマンドを使用することで、問い合わせ文の実行計画を表示することができる。
            EXPLAINコマンドの対象となるSQLコマンドとして正しいものを全て選択しなさい。`, 
            c: [
                'DELETE',
                'DROP TABLE',
                'REINDEX',
                'PREPARE',
                'EXECUTE',
            ],
            a: [0, 4],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/09_140702'
        },
        {
            q: `標準統計情報ビューに関して正しいものを全て選択しなさい。`, 
            c: [
                'pg_stat_all_tablesから、TOASTテーブルから読み取られたディスクブロック数を取得することができる。',
                'pg_stat_activityから、現在の問い合わせの実行開始時刻を取得することができる。',
                'pg_stat_databaseから、対象データベースのエラー発生数を取得することができる。',
                'pg_statio_all_tablesから、対象テーブルのバッファヒット数を取得することができる。',
            ],
            a: [1, 3],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/08_140530'
        },
        {
            q: `pg_stat_databaseに関する記述で誤っているものを全て選択しなさい。`, 
            c: [
                'データベースクラスタ全体の稼働統計情報が1行だけ格納される。',
                'blks_hitはバッファキャッシュにヒットしたブロック数が格納される。',
                'blks_readはディスクから読み込んだブロック数とバッファキャッシュから読み込んだブロック数の合計である。',
                'デフォルトではtrack_countsパラメータがoffであるため、稼働統計情報が収集されない。',
                'tup_fetchedはインデックススキャンを使用して読み取った行数が格納される。',
            ],
            a: [0, 2, 3, 4],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/07_140417'
        },
        {
            q: `ロングトランザクションを発見するのに有効なシステムカタログについての解説で、適切なものを選びなさい。`, 
            c: [
                'pg_stat_activityのwaitingを監視する',
                'pg_stat_activityのquery_startを監視する',
                'pg_stat_activityのxact_startを監視する',
                'ロングトランザクションを発見するのに有効なシステムカタログは無い',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/06_140307'
        },
        {
            q: `oid2nameの使い方として誤っているものを1つ選びなさい。`, 
            c: [
                `データベースのOID一覧を取得するため以下のコマンドを実行した
                　$ oid2name`,
                `別ホストsrv上の5432ポートで動作するPostgreSQLのデータベースのOID一覧を取得するため以下のコマンドを実行した
                　$ oid2name -h srv -p 5432`,
                `データベースtestdbに含まれるテーブルのファイルノード番号一覧を取得するため以下のコマンドを実行した
                　$ oid2name -d testdb`,
                `テーブル空間のOID一覧を取得するため以下のコマンドを実行した
                　$ oid2name -s`,
                `データベースtestdbに含まれるテーブル/インデックス/シーケンスのファイルノード一覧を取得するため以下のコマンドを実行した
                　$ oid2name -i -d testdb`,
            ],
            a: [1],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/05_130910'
        },
        {
            q: `テーブル/カラム統計情報に関する記述の中で、正しいものを2つ選びなさい`, 
            c: [
                'pg_classでは、テーブルのほか、ビューやインデックスの情報も扱う。',
                'pg_classには、常に最新の情報が格納されている。',
                'pg_class内の列であるreltuplesにはテーブル内の行数が格納されるが、この値は推測値である。',
                'pg_statsは、カラム統計情報を扱うテーブルである。',
                'pg_statsで参照できる情報の中には実データの一部が格納されるため、一般のユーザは参照できない。',
            ],
            a: [0, 2],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/03_130704'
        },
        {
            q: `EXPLAINコマンドを用いて問い合わせを実行させ、結果が出力された。

            EXPLAIN ANALYZE SELECT *
            FROM table1 t1, table2 t2
            WHERE t1.unique1 < 100 AND t1.unique2 = t2.unique2;
            
            QUERY PLAN
            
            -----------------------------------------------------------------------------------------------------------------------------------
            
            Nested Loop (cost=0.00..352.17 rows=97 width=16) (actual time=0.033..1.875 rows=100 loops=1)
               -> Index Scan using table1_i1 on table1 t1 (cost=0.00..24.05 rows=97 width=8) (actual time=0.016..0.218 rows=100 loops=1)
                     Index Cond: (unique1 < 100)
               -> Index Scan using table2_i2 on table2 t2 (cost=0.00..3.27 rows=1 width=8) (actual time=0.004..0.006 rows=1 loops=100)
                     Index Cond: (t2.unique2 = t1.unique2)
            Total runtime: 2.065 ms
            
            この結果言えることとして、誤っているものを2つ選択せよ。`, 
            c: [
                'この問い合わせにより出力される行数は97行であった。',
                'Total runtime には、結果行を操作するための時間の他に、エクゼキュータの起動、停止時間も含まれている。',
                'table2_i2 という名前のインデックスを用いて検索をしている。',
                'Nested Loop の cost と actual time の値が大きく異なっているので、統計情報の再収集が必要である。',
                'table1 が外側、table2 が内側になるネステッドループで結合をしている。',
            ],
            a: [0, 3],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/02_130402'
        },
        {
            q: `pg_stat_database, pg_stat_all_tables などのアクセス統計情報(稼働統計情報)のビューに関する説明として、適切なものを2つ選びなさい。`, 
            c: [
                'ANALYZE コマンドを実行したときにデータが収集される。',
                'stats collector プロセスによって定期的にデータが収集される。',
                'テーブルの行数、最大値・最小値、データの分布など、テーブル内のデータの状態が収集される。',
                'プランナが SQL の最適な実行計画を作成するために利用される。',
                'システム全体のスループットの調査、パフォーマンス問題の発見などに使われる。',
            ],
            a: [1, 4],
            d: 'https://oss-db.jp/sample/gold_monitoring_01/01_111227'
        },
        // パフォーマンスチューニング
        {
            q: `PostgreSQLサーバをレプリケーション構成で稼働させる場合、synchronous_commit パラメータによってプライマリ機とスタンバイ機の同期レベルをチューニングすることが可能である。
            以下の選択肢は、プライマリ機でトランザクションのコミットを実行した際の、synchronous_commit パラメータの設定値毎の動作の説明をしたものである。誤っているものを1つ選びなさい。`, 
            c: [
                'on にすると、WALがスタンバイ機のディスクに正常に書き出されたタイミングでコミット成功とする',
                'off にすると、WALがプライマリ機にもスタンバイ機にもまだ書き出されていない状況でもコミット成功とする',
                'local にすると、WALがスタンバイ機のディスクに書き出される前の、バッファに書き出されたタイミングでコミット成功とする',
                'remote_apply にすると、スタンバイ機でのWALのディスク書き込みだけでなく、WALの記述内容がデータベースに適用されたタイミングでコミット成功とする',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_performance_01/15_190710'
        },
        {
            q: `buffers_backendに関する説明として適切なものをすべて選びなさい。`, 
            c: [
                'pg_stat_bgwriterビューによって表示される',
                'チェックポイントによる書き出しの際に値が増加する',
                'buffers_backendの値がbuffers_allocに対して大きい場合は、shared_buffersの値のチューニングを検討する必要がある',
                'バックグラウンドライタによる書き出しの際に値が増加する',
                'バックエンドプロセスによる書き出しの際に値が増加する',
            ],
            a: [0, 2, 4],
            d: 'https://oss-db.jp/sample/gold_performance_01/14_190312'
        },
        {
            q: `問い合わせ計画に関する以下の内容のうち、正しいものを全て選択しなさい。`, 
            c: [
                'enable_indexscanを無効に設定すると、インデックススキャンは完全に行われなくなる。',
                'enable_seqscanを無効に設定すると、シーケンシャルスキャンは完全に行われなくなる。',
                'random_page_costをseq_page_costと比較して小さく設定すると、よりインデックススキャンが使用されるようになる。',
                'random_page_costをseq_page_costと比較して大きく設定すると、よりインデックススキャンが使用されるようになる。',
                'default_statistics_targetをより小さく設定すると、より細かく統計情報を収集するようになるため、プランナの予測の品質が向上する。 ',
            ],
            a: [0, 2],
            d: 'https://oss-db.jp/sample/gold_performance_01/13_171016'
        },
        {
            q: `work_memをチューニングすることによって、性能が向上すると考えられる処理を全て選択しなさい。`, 
            c: [
                'ORDER BY',
                'CREATE INDEX',
                'マージ結合',
                'VACUUM',
                '自動VACUUM',
            ],
            a: [0, 2],
            d: 'https://oss-db.jp/sample/gold_performance_01/12_170403'
        },
        {
            q: `インデックスの作成に関する説明として、適切なものを2つ選びなさい。`, 
            c: [
                'FILLFACTORの指定が省略された場合、デフォルト値として対象テーブルのFILLFACTORと同じ値が設定される',
                'UNLOGGEDパラメータが指定された場合、インデックスの更新時にWALログが取られなくなり、更新処理が高速化する',
                'PARALLELパラメータが指定された場合、複数のプロセスによりインデックスが作成され、作成時間が短縮する',
                'CONCURRENTLYパラメータが指定された場合、対象テーブルに対する書き込みをロックせずにインデックスを作成するが、通常の方式より作成時間が長くなる',
                'インデックスの定義で使用される関数と演算子は、immutableでなければならない',
            ],
            a: [3, 4],
            d: 'https://oss-db.jp/sample/gold_performance_01/11_151116'
        },
        {
            q: `GUCパラメータのenable_seqscanをonからoffに変更する前後で、同一のクエリに対してEXPLAIN ANALYZE文で実行計画を取得する。
            実行計画の変化の説明として、最も適切ではないものを１つ選びなさい。
            この時、enable_seqscan以外の条件はすべて同一とする。`, 
            c: [
                'Total runtimeの値が大きくなる可能性がある',
                'Total runtimeの値が小さくなる可能性がある',
                '最上位ノードの全体推定コストが大きくなる可能性がある',
                '最上位ノードの全体推定コストが小さくなる可能性がある',
                '全く同一の実行計画が選択される可能性がある',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_performance_01/10_150421'
        },
        {
            q: `インデックスの再作成について正しい記述を2つ選びなさい。`, 
            c: [
                'インデックスの再作成はサービスを停止して行う必要がある。',
                'REINDEXはインデックスの元となるテーブルの読み込みをロックしないため、サービス稼働中に実行しても参照処理への影響はない。',
                'CREATE INDEX CONCURRENTLYは、同時挿入、更新、削除と競合するロックを獲得せずにインデックスを作成できる。',
                'CREATE INDEX CONCURRENTLYでは、プライマリキーの作成も可能である。',
                '定期的にインデックスの再作成を行うことで、インデックスの肥大化を抑止できる。',
            ],
            a: [2, 4],
            d: 'https://oss-db.jp/sample/gold_performance_01/09_150205'
        },
        {
            q: `PostgreSQLの処理全般が定期的に遅くなる現象が発生した。この場合のチューニングで効果が期待できる対策を2つ選びなさい。`, 
            c: [
                '遅くなったSQLを見直し、負荷の原因となっている記述を修正する。',
                'checkpoint_completion_targetを調整して、チェックポイントの負荷分散を図る。',
                'autovacuum_vacuum_cost_limitまたはvacuum_cost_limit値を小さくし、VACUUM処理の負荷低減を図る。',
                'ストリーミングレプリケーション構成に変更し負荷分散を図る。',
                'PostgreSQLの特性であり対策はない。',
            ],
            a: [1, 2],
            d: 'https://oss-db.jp/sample/gold_performance_01/08_150205'
        },
        {
            q: `full_page_writesパラメータをOFFに設定した場合に関する説明として、適切でないものを2つ選びなさい。`, 
            c: [
                'データ更新時の応答性能が向上する可能性がある',
                'データ更新時のWALの書き込み量が低減する可能性がある',
                'wal_levelパラメータがminimalの場合は、応答性能は変化しない',
                'システムクラッシュ時に、回復不可能なデータ破損が発生する可能性がある',
                'ポイントインタイムリカバリの運用はできなくなる',
            ],
            a: [2, 4],
            d: 'https://oss-db.jp/sample/gold_performance_01/07_150209'
        },
        {
            q: `性能低下の原因に関して正しいものをすべて選択しなさい。`, 
            c: [
                'shared_buffersの値を大きく設定しすぎたことによって、チェックポイント中の問い合わせの性能が低下した。',
                'maintenance_work_memをwork_memよりも大きく設定したことによって、VACUUM処理の性能が低下した。',
                '複数のセッションが多量のINSERTを発行したことによって、WALファイルへの書き込みで競合が発生し、INSERTの性能が低下した。',
                'pgstattupleを用いて定期的にタプルレベルの統計情報を取得しなかったため、PostgreSQLが最適な実行計画を作成できずに問い合わせの性能が低下した。',
            ],
            a: [0, 2],
            d: 'https://oss-db.jp/sample/gold_performance_01/06_141027'
        },
        {
            q: `データベースに大量データを投入する際の性能を向上させるために、一時的に講じることとして、適切とは言えないものを2つ選びなさい。`, 
            c: [
                '自動コミットをオフにする',
                'インデックスや外部キー制約を削除する',
                'maintenance_work_memを増やす',
                'checkpoint_segmentsを減らす',
                'checkpoint_timeoutを増やす',
            ],
            a: [3, 4],
            d: 'https://oss-db.jp/sample/gold_performance_01/03_130704'
        },
        {
            q: `デッドロックに関する GUC パラメータ deadlock_timeout の説明として、正しいものをすべて選びなさい。`, 
            c: [
                'deadlock_timeout で指定された時間を経過してもロックが獲得できなければ、デッドロックが発生していると判断される。',
                'deadlock_timeout の値を調整することで、デッドロックの発生を回避できる。',
                'deadlock_timeout の値を小さくすると、ロック待ちのプロセスが減るので、結果的にCPU負荷を小さくすることができると考えられる。',
                'デッドロックはアプリケーションの作り方を工夫することで回避すべきであり、deadlock_timeout の値はなるべく大きくすることが望ましい。',
                'deadlock_timeout のデフォルトの設定では、デッドロックの検出は自動的には実行されない。',
            ],
            a: [3],
            d: 'https://oss-db.jp/sample/gold_performance_01/02_111115'
        },
        {
            q: `GUCパラメータの説明として、誤っているものを1つ選びなさい。`, 
            c: [
                'shared_bufferは、PostgreSQLサーバが使用する共有メモリバッファのサイズ を設定する。',
                'max_connectionsは、PostgresSQLサーバに接続できる最大クライアント数を 設定する。',
                'work_memは、VACUUM、CREATE INDEXなどの保守作業で使用されるメモリの最 大容量を設定する。',
                'sslをonに設定することでSSL接続を有効にする。',
                'wal_levelは、WALに書き込まれる情報を制御するパラメータである。',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_performance_01/01_120210'
        },
        // Gold 障害対応
        {
            q: `共有メモリが不足して、サーバがダウンしてしまった時の対策として正しいものは次のうちどれか。`, 
            c: [
                'maintenance_work_memで適切なメモリ領域を設定する',
                'shared_buffersで適切なメモリ領域を設定する',
                'autovacuum_work_memで適切なメモリ領域を設定する',
                'pg_resetwalを用いてWALファイルを整合性のある状態に復旧し、PostgreSQLを起動する',
                'work_memで適切なメモリ領域を設定する',
            ],
            a: [1],
            d: 'https://oss-db.jp/sample/gold_trouble_01/08_190423'
        },
        {
            q: `操作ミスによってリレーションが消失することを想定した対策または復旧を行う際に、実施すべき内容として正しいものを全て選択しなさい。`, 
            c: [
                'ミラーリングによって、ディスクの複製を作成しておく。',
                'pg_basebackupによって、定期的に論理バックアップを取得しておく。',
                'PITRによって、操作ミス直前の時間まで巻き戻しを行う。',
                'pg_dumpallによって、操作ミス直前の時間まで巻き戻しを行う。',
                'wal_levelをminimalからhot_standbyに変更しておく。',
            ],
            a: [2, 4],
            d: 'https://oss-db.jp/sample/gold_trouble_01/07_171031'
        },
        {
            q: `以下のサーバログに関する説明として、適切なものを1つ選びなさい。
            LOG: server process (PID 21334) was terminated by signal 11: Segmentation fault
            DETAIL: Failed process was running: SELECT user_func();`, 
            c: [
                'ユーザ要求によりクエリがキャンセルされた',
                'プロセスに対してpg_cancel_backend関数が発行された',
                'プロセスに対してpg_terminate_backend関数が発行された',
                'OOM KillerによりSIGKILLが発生した',
                'user_funcユーザ定義関数によりSIGSEGVが発生した',
            ],
            a: [4],
            d: 'https://oss-db.jp/sample/gold_trouble_01/06_150904'
        },
        {
            q: `2台のサーバでレプリケーションを行い、スタンバイサーバをホットスタンバイとして稼動させる。
            サーバ間の通信が一時的に遮断し、その後に復旧した場合の説明として、適切ではないものを2つ選びなさい。`, 
            c: [
                'レプリケーションの方式が同期か非同期かにかかわらず、通信が遮断中でも、マスタサーバでの参照系クエリは実行可能である',
                'レプリケーションの方式が同期か非同期かにかかわらず、通信が遮断中でも、スタンバイサーバでの参照系クエリは実行可能である',
                '同期レプリケーションの場合は、通信が遮断中は、マスタサーバでの更新系クエリは待機させられる',
                '通信復旧後のデータの再同期処理には、アーカイブWALが必須となる',
                '通信復旧後のデータの再同期処理に、アーカイブWALが利用される際は、マスタサーバのGUCパラメータrestore_commandが実行され、スタンバイサーバにアーカイブWALが転送される',
            ],
            a: [3, 4],
            d: 'https://oss-db.jp/sample/gold_trouble_01/05_150612'
        },
        {
            q: `PostgreSQLへの接続に関して、スーパーユーザでPostgreSQLに接続した際、以下のメッセージが出力された。
            FATAL: sorry, too many clients already
            このエラーメッセージが出力される原因として適切なものを1つ選びなさい。`, 
            c: [
                '同時接続数がmax_connectionsに設定した値を超えた。',
                '同時接続数がsuperuser_reserved_connectionsに設定した値を超えた。',
                '同時接続数がdb_connectionsに設定した値を超えた。',
                '同時接続数が（max_connections - superuser_reserved_connections）の値を超えた。',
                '同時接続数が（db_connections - superuser_reserved_connections）を超過した。',
            ],
            a: [0],
            d: 'https://oss-db.jp/sample/gold_trouble_01/04_140530'
        },
        {
            q: `あるユーザテーブルの参照時に、以下のエラーメッセージが出力された。
            「ERROR: invalid page header in block 0 of relation base/16408/16421」
            この時の対処として最も適切なものを1つ選びなさい。`, 
            c: [
                'データベース全体に対してVACUUMを実行する',
                '該当のテーブルファイルを削除し、PostgreSQLを再起動する',
                'zero_damaged_pages を on に設定して再度テーブルを参照する',
                '該当のシステムテーブルに対してCLUSTERを実行する',
                'PostgreSQLをシングルユーザ状態で起動し、該当のテーブルに定義されたインデックスに対してREINDEX INDEXを実行する',
            ],
            a: [2],
            d: 'https://oss-db.jp/sample/gold_trouble_01/03_130910'
        },
        {
            q: `PostgreSQLのWALファイルが破損した場合の復旧方法として正しいものを2つ選びなさい。`, 
            c: [
                'pg_xact領域のファイルをすべて削除し、PostgreSQLを再起動する',
                'PostgreSQLを起動したまま、環境変数PGDATAにデータベースクラスタ領域を指定してpg_resetwalを実行する',
                'PostgreSQLを停止し、コマンドラインでデータベースクラスタ領域を指定してpg_resetwalを実行後にPostgreSQLを起動する',
                'pg_controldataファイルを削除し、PostgreSQLを再起動する',
                'pg_resetwalの-xオプションで次のトランザクションIDを指定する場合は、pg_xactディレクトリ内のファイル名で最も大きな数字に1を加えて、1048576で乗算した値を用いる',
            ],
            a: [2, 4],
            d: 'https://oss-db.jp/sample/gold_trouble_01/02_130620'
        },
        {
            q: `システムカタログのインデックスに関する説明として、適切ではないものを1つ選びなさい。`, 
            c: [
                '共有システムカタログのインデックスは$PGDATA/global内に作成される。',
                'システムカタログのインデックスが破損している場合、サーバプロセスが起動時に強制終了する可能性がある。',
                'システムカタログの読み込み時にシステムインデックスを無視するにはGUCパラメータのignore_system_indexesを利用する。',
                'インデックスの破損範囲が不明な場合に、データベースの全てのシステムインデックスを再構成するためのSQLコマンドはREINDEX SYSTEMである。',
                '共有システムカタログのいずれかのインデックスが破損した可能性がある場合は、必ずスタンドアロンサーバを使用して修復しなければいけない。',
            ],
            a: [4],
            d: 'https://oss-db.jp/sample/gold_trouble_01/01_130510'
        },
    ];
    let currentNum = 0;
    let isAnsweredCnt = 0;
    let isCorrectCnt = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
        return arr;
    }

    function checkAnser(li) {
        if (isAnswered) {
            return;
        }

        if (quizSet[currentNum].a.indexOf(quizSet[currentNum].c.indexOf(li.textContent)) !== -1) {
            li.classList.add('list-group-item-success');
            li.textContent += '  ...correct!'
            isCorrectCnt++;
            isAnsweredCnt++;
        } else {
            li.classList.add('list-group-item-danger');
            li.textContent += '  ...wrong!'
            isAnsweredCnt++;
        }

        if (isAnsweredCnt === quizSet[currentNum].a.length) { 
            isAnswered = true;
            isAnsweredCnt = 0;
            if (isCorrectCnt === quizSet[currentNum].a.length) { 
                score++;
            }
            isCorrectCnt = 0;

            console.log(score, isAnsweredCnt);

            btn.classList.remove('disabled');
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');

            btn2.classList.remove('disabled');
            btn2.classList.remove('btn-secondary');
            btn2.classList.add('btn-primary');

            detailbtn.classList.remove('disabled');
            detailbtn.classList.remove('btn-secondary');
            detailbtn.classList.add('btn-info');
        }
    }

    function setQuiz() {
        isAnswered = false;
        question.textContent = `${currentNum+1}/${quizSet.length} : `+ quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);

        shuffledChoices.forEach(choice => {
            const li = document.createElement('a');
            li.textContent = choice;
            li.classList.add('list-group-item')
            li.classList.add('list-group-item-action')
            li.classList.add('font-weight-bold')
            li.classList.add('mt-1')
            li.addEventListener('click', () => {
                checkAnser(li);
            });
            choices.appendChild(li);
        });

        detailbtn.href = quizSet[currentNum].d;

        if (currentNum === quizSet.length-1) {
            btn.classList.add('d-none');
            btn2.classList.remove('d-none');
        }
    }

    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');
        btn.classList.add('btn-secondary');
        btn.classList.remove('btn-primary');

        btn2.classList.add('disabled');
        btn2.classList.add('btn-secondary');
        btn2.classList.remove('btn-primary');

        detailbtn.classList.add('disabled');
        detailbtn.classList.add('btn-secondary');
        detailbtn.classList.remove('btn-info');

        currentNum++;

        spinner.classList.remove('d-none');
        console.log(score);

        var timeoutId = window.setTimeout(() => {
            spinner.classList.add('d-none');
            scoreLabel.classList.remove('d-none');
            console.log(score);
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
        }, 2000)

        setQuiz();
    });

    btn2.addEventListener('click', () => {
        if (btn2.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');
        btn.classList.add('btn-secondary');
        btn.classList.remove('btn-primary');

        btn2.classList.add('disabled');
        btn2.classList.add('btn-secondary');
        btn2.classList.remove('btn-primary');

        detailbtn.classList.add('disabled');
        detailbtn.classList.add('btn-secondary');
        detailbtn.classList.remove('btn-info');

        currentNum++;

        spinner.classList.remove('d-none');
        console.log(score);

        var timeoutId = window.setTimeout(() => {
            spinner.classList.add('d-none');
            scoreLabel.classList.remove('d-none');
            console.log(score);
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
        }, 0)

        setQuiz();
    });

}
