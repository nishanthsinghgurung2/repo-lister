import { QUERY_REPO_LIST } from "./gqlquery";

export let MOCK_REPOS = [
    {
        "request": {
            "query": QUERY_REPO_LIST,
            "variables": {
                "first": 100,
                "after": null,
                "query": "tennis",
                "type": "REPOSITORY"
            },
            "errorPolicy": 'all'
        },
        "result": {
            "data": {
              "search": {
                "repositoryCount": 12176,
                "edges": [
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_atp",
                      "forkCount": 391,
                      "stargazerCount": 505,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/emilybache/Tennis-Refactoring-Kata",
                      "forkCount": 673,
                      "stargazerCount": 393,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/edouardthom/ATPBetting",
                      "forkCount": 154,
                      "stargazerCount": 316,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/SQATLab2016/TennisGame_Testing",
                      "forkCount": 219,
                      "stargazerCount": 2,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_wta",
                      "forkCount": 81,
                      "stargazerCount": 103,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/mcekovic/tennis-crystal-ball",
                      "forkCount": 19,
                      "stargazerCount": 112,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_MatchChartingProject",
                      "forkCount": 67,
                      "stargazerCount": 129,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/BuzzFeedNews/2016-01-tennis-betting-analysis",
                      "forkCount": 60,
                      "stargazerCount": 244,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/serve-and-volley/atp-world-tour-tennis-data",
                      "forkCount": 79,
                      "stargazerCount": 110,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_pointbypoint",
                      "forkCount": 39,
                      "stargazerCount": 51,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_slam_pointbypoint",
                      "forkCount": 45,
                      "stargazerCount": 62,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/iss-dipsa/TennisScorer1",
                      "forkCount": 53,
                      "stargazerCount": 2,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JeffSackmann/tennis_misc",
                      "forkCount": 14,
                      "stargazerCount": 30,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/maudzung/TTNet-Real-time-Analysis-System-for-Table-Tennis-Pytorch",
                      "forkCount": 70,
                      "stargazerCount": 224,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/spdu/TennisGame",
                      "forkCount": 42,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/taralloc/tennis-prediction",
                      "forkCount": 18,
                      "stargazerCount": 36,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/opencv-java/object-detection",
                      "forkCount": 44,
                      "stargazerCount": 46,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/jrbadiabo/Bet-on-Sibyl",
                      "forkCount": 82,
                      "stargazerCount": 189,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/M3SOulu/TennisGame",
                      "forkCount": 35,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/anirudhjoshi/fluid_table_tennis",
                      "forkCount": 16,
                      "stargazerCount": 62,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/r4ns/TennisGameTDD",
                      "forkCount": 38,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/r4ns/TennisGame",
                      "forkCount": 32,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/danielkorzekwa/atpworldtour-api",
                      "forkCount": 16,
                      "stargazerCount": 47,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/Valence-IUT-Info-DUT-M3105/TennisKata-Java-TDD",
                      "forkCount": 34,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/skoval/deuce",
                      "forkCount": 24,
                      "stargazerCount": 68,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/follesoe/TennisKataJava",
                      "forkCount": 10,
                      "stargazerCount": 12,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/Iflaah02/Tennis_Game",
                      "forkCount": 55,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/vmarquet/table-tennis-computer-vision",
                      "forkCount": 13,
                      "stargazerCount": 48,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/91tdd/TennisScore",
                      "forkCount": 24,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/joshmcarthur/Latter",
                      "forkCount": 16,
                      "stargazerCount": 15,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/lianej/refactoring-tennis",
                      "forkCount": 43,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/RemiRigal/TennisBallCollector",
                      "forkCount": 23,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/HaydenFaulkner/Tennis",
                      "forkCount": 5,
                      "stargazerCount": 12,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/ermathias/tennis-courts-v1",
                      "forkCount": 23,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/Gabriel-Ducrocq/Tennis",
                      "forkCount": 5,
                      "stargazerCount": 12,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/gchlebus/tennis-court-detection",
                      "forkCount": 11,
                      "stargazerCount": 24,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/anncode1/DevDay4Women-WorkshopJava",
                      "forkCount": 152,
                      "stargazerCount": 3,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/ploeh/KataTennis",
                      "forkCount": 8,
                      "stargazerCount": 25,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/danielkorzekwa/tennis-player-compare",
                      "forkCount": 10,
                      "stargazerCount": 25,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/opeyemibami/NLP-Tennis-Bot",
                      "forkCount": 15,
                      "stargazerCount": 9,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/danielkorzekwa/tennis-probability-calculator",
                      "forkCount": 11,
                      "stargazerCount": 18,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/LambdaFactory/Tennis",
                      "forkCount": 3,
                      "stargazerCount": 29,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/sivabudh/tennis-kata",
                      "forkCount": 28,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/TenniS-Open/TenniS",
                      "forkCount": 5,
                      "stargazerCount": 7,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/PharkMillups/sf-table-tennis-tourney",
                      "forkCount": 10,
                      "stargazerCount": 16,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/nikhilrayaprolu/tennis-python",
                      "forkCount": 25,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/AgarwalConsulting/tennis-kata-java",
                      "forkCount": 24,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/SDN-Security/TENNISON",
                      "forkCount": 6,
                      "stargazerCount": 12,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/hampen2929/survey_on_tennis_tech",
                      "forkCount": 6,
                      "stargazerCount": 11,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/jzahedieh/django-tennis-ladder",
                      "forkCount": 8,
                      "stargazerCount": 15,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/alexlobanov/Tennis",
                      "forkCount": 5,
                      "stargazerCount": 4,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/shabake/GHDropMenuDemo",
                      "forkCount": 85,
                      "stargazerCount": 617,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/me4502/VR-Tennis",
                      "forkCount": 7,
                      "stargazerCount": 10,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/nikhil-dev/hawkeye",
                      "forkCount": 11,
                      "stargazerCount": 18,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/superbderrick/ScoreBoard",
                      "forkCount": 5,
                      "stargazerCount": 13,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/noavish/tennis-challenge",
                      "forkCount": 9,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/SafalPandey/js-table-tennis",
                      "forkCount": 4,
                      "stargazerCount": 11,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/victorsheng/tennis-book",
                      "forkCount": 3,
                      "stargazerCount": 7,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/mgreau/docker4dev-tennistour-app",
                      "forkCount": 7,
                      "stargazerCount": 14,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/elviejo79/sqa2014tennis",
                      "forkCount": 18,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/table-tennis-it/TableTennisITCup",
                      "forkCount": 6,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/taikoma/TennisVideoAnalysis",
                      "forkCount": 3,
                      "stargazerCount": 13,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/hfausta/tennis-ball-tracking",
                      "forkCount": 6,
                      "stargazerCount": 12,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/chow-vincent/tennis_action_recognition",
                      "forkCount": 5,
                      "stargazerCount": 16,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/aesopwolf/pongitron",
                      "forkCount": 5,
                      "stargazerCount": 7,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/kristianmandrup/frontpage-server",
                      "forkCount": 25,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/MaximeBataille/tennis_tracking",
                      "forkCount": 3,
                      "stargazerCount": 27,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/YuYuCong/Tennis-Collection-Robot",
                      "forkCount": 6,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/vishaltiwari/bmvc-tennis-analytics",
                      "forkCount": 4,
                      "stargazerCount": 17,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/erik-grabljevec/Tennis-Modelling",
                      "forkCount": 3,
                      "stargazerCount": 7,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/zhangjia517/Unity_Tennis",
                      "forkCount": 4,
                      "stargazerCount": 4,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/jgollub1/tennis_match_prediction",
                      "forkCount": 5,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/rforgione/tennis",
                      "forkCount": 3,
                      "stargazerCount": 4,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/d-qn/2016_06_14_tennisATP",
                      "forkCount": 4,
                      "stargazerCount": 4,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/tlaothong/hack-tennis-refactoring",
                      "forkCount": 7,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/divyanshusahu/Tennis-Game",
                      "forkCount": 4,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/danalloway/sttf",
                      "forkCount": 7,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/ericgu/Tennis-Refactoring-Kata",
                      "forkCount": 11,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/pilifs/gortpong",
                      "forkCount": 5,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/amrut-prabhu/table-tennis-ball-trajectory",
                      "forkCount": 5,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/sethah/deeptennis",
                      "forkCount": 3,
                      "stargazerCount": 20,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/Yveda/tableTennisGame",
                      "forkCount": 4,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/vivek0206/Ping_Pong",
                      "forkCount": 6,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/dvrensk/tennis-kata",
                      "forkCount": 5,
                      "stargazerCount": 3,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/ashish4321/Tennis_game",
                      "forkCount": 6,
                      "stargazerCount": 2,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/ArtooTrills/Bounty-Tennis",
                      "forkCount": 8,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/DChen7/TennisPredictor",
                      "forkCount": 2,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/rhuss/ping-pong",
                      "forkCount": 3,
                      "stargazerCount": 6,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/Devcognitio/Tennis-Refactoring-Kata",
                      "forkCount": 9,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/gfrenoy/TabT-API",
                      "forkCount": 5,
                      "stargazerCount": 9,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/bengourley/pebble-tennis",
                      "forkCount": 3,
                      "stargazerCount": 8,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/RobotLearning/traj-gen-and-tracking",
                      "forkCount": 4,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/91dojo/201804-TennisScore",
                      "forkCount": 5,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/bu7ch-learn1ng/TennisGameKata",
                      "forkCount": 5,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/iTenis/iTennis-Lopts",
                      "forkCount": 3,
                      "stargazerCount": 11,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/geekhub-js-2015/tennis",
                      "forkCount": 4,
                      "stargazerCount": 0,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/wunderman4/TableTennisTracking",
                      "forkCount": 4,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/JoeyChennn/TennisPoint",
                      "forkCount": 2,
                      "stargazerCount": 6,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/milador/raspberryPetDog",
                      "forkCount": 3,
                      "stargazerCount": 5,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  },
                  {
                    "node": {
                      "url": "https://github.com/varokas/tennis-tdd-java",
                      "forkCount": 5,
                      "stargazerCount": 1,
                      "__typename": "Repository"
                    },
                    "__typename": "SearchResultItemEdge"
                  }
                ],
                "pageInfo": {
                  "startCursor": "Y3Vyc29yOjE=",
                  "hasNextPage": true,
                  "endCursor": "Y3Vyc29yOjEwMA==",
                  "__typename": "PageInfo"
                },
                "__typename": "SearchResultItemConnection"
              }
            }
        }
    }
];

export const ERROR_MOCK_REPOS = [
    {
        "request": {
            "query": QUERY_REPO_LIST,
            "variables": {
                "first": 100,
                "after": null,
                "query": "tennis",
                "type": "REPOSITORY"
            },
            "errorPolicy": 'all'
        },
        error: new Error('An error occurred')
    }
];

export const EMPTY_MOCK_REPOS = [
    {
        "request": {
            "query": QUERY_REPO_LIST,
            "variables": {
                "first": 100,
                "after": null,
                "query": "tennis",
                "type": "REPOSITORY"
            },
            "errorPolicy": 'all'
        },
        "result": {
            "data": {}
        }
    }
];