package manager;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Phill
 */
public class FileManager {

    private static final String path = "C:\\Projects\\GitHub\\Studinator\\ChatApplication\\messages\\";

    public static String initDone() {
        String layout = "{ \"DoneList\": [] }";

        File f = new File(path + "done" + ".json");
        try {
            f.createNewFile();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        FileWriter fw = null;
        BufferedWriter bw = null;

        try {
            fw = new FileWriter(f);
            bw = new BufferedWriter(fw);
            bw.write(layout);
            bw.flush();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                bw.close();
                fw.close();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        return layout;
    }

    public static String writeIncomplete(JSONObject jo) {
        String username = jo.getString("username");
        String message = jo.getString("message");
        String oldmessage = "";

        File f = new File(path + username + ".txt");
        if (f.exists() && !f.isDirectory()) {
            FileReader fr = null;
            BufferedReader br = null;
            try {
                fr = new FileReader(f);
                br = new BufferedReader(fr);

                String s = br.readLine();
                while (s != null) {
                    oldmessage += s;
                    s = br.readLine();
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            } finally {
                try {
                    br.close();
                    fr.close();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        } else {
            try {
                f.createNewFile();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        FileWriter fw = null;
        BufferedWriter bw = null;

        try {
            fw = new FileWriter(f);
            bw = new BufferedWriter(fw);
            bw.write(oldmessage + message);
            bw.flush();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                bw.close();
                fw.close();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return oldmessage;
    }

    public static void writeDone(JSONObject jo) {
        String username = jo.getString("username");
        //String message = jo.getString("message");

        String wholeMessage = writeIncomplete(jo);

        String doneString = "";

        File f = new File(path + username + ".txt");
        if (f.exists() && !f.isDirectory()) {
            f.delete();
        }

        File fDone = new File(path + "done" + ".json");
        if (fDone.exists() && !fDone.isDirectory()) {
            FileReader fr = null;
            BufferedReader br = null;
            try {
                fr = new FileReader(fDone);
                br = new BufferedReader(fr);

                String s = br.readLine();
                while (s != null) {
                    doneString += s;
                    s = br.readLine();
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            } finally {
                try {
                    br.close();
                    fr.close();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        } else {
            try {
                doneString = initDone();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        JSONObject doneobject = new JSONObject(doneString);

        jo.put("sendTo", new JSONArray());
        jo.put("message", wholeMessage);

        doneobject.getJSONArray("DoneList").put(jo);

        FileWriter fw = null;
        BufferedWriter bw = null;

        try {
            fw = new FileWriter(fDone);
            bw = new BufferedWriter(fw);
            bw.write(doneobject.toString());
            bw.flush();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                bw.close();
                fw.close();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }

    public static String getUnknown(JSONObject jo) {
        String username = jo.getString("username");
        //String message = jo.getString("message");

        String retStr = "-1";
        String jStr = "";

        File fDone = new File(path + "done" + ".json");
        if (fDone.exists() && !fDone.isDirectory()) {
            FileReader fr = null;
            BufferedReader br = null;
            try {
                fr = new FileReader(fDone);
                br = new BufferedReader(fr);

                String s = br.readLine();
                while (s != null) {
                    jStr += s;
                    s = br.readLine();
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            } finally {
                try {
                    br.close();
                    fr.close();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
            JSONObject jlist = new JSONObject(jStr);
            JSONObject retj = new JSONObject();
            retj.put("messages", new JSONArray());
            for (int i = 0; i < jlist.getJSONArray("DoneList").length(); i++) {
                JSONObject jtemp = jlist.getJSONArray("DoneList").getJSONObject(i);
                boolean hit = false;
                for (int j = 0; j < jtemp.getJSONArray("sendTo").length(); j++) {
                    if (jtemp.getJSONArray("sendTo").getString(j).equals(username)) {
                        hit = true;
                    }
                }
                if (!hit) {
                    retj.getJSONArray("messages").put(jtemp);
                    jlist.getJSONArray("DoneList").getJSONObject(i).getJSONArray("sendTo").put(username);
                }
            }
            if (retj.getJSONArray("messages").length() > 0) {
                retStr = retj.toString();

                FileWriter fw = null;
                BufferedWriter bw = null;

                try {
                    fw = new FileWriter(fDone);
                    bw = new BufferedWriter(fw);
                    bw.write(jlist.toString());
                    bw.flush();
                } catch (Exception ex) {
                    ex.printStackTrace();
                } finally {
                    try {
                        bw.close();
                        fw.close();
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }
        } else {
            retStr = "-1";
        }

        return retStr;
    }
}
