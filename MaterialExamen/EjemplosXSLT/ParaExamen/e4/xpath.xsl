<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <style>
                .row1{
                background-color: rgb(65, 208, 47)
                }

                .row0{
                background-color: rgb(174, 255, 0)
                }
            </style>


            <body>
                <h2>Titles</h2>
                <xsl:for-each select="//book">
                    <ul>
                        <li>
                            <a>
                                <xsl:value-of select="title" />

                            </a>
                        </li>
                    </ul>
                </xsl:for-each>

                <div>
                    <xsl:for-each select="//book">
                        <xsl:if test="@category='web'">
                        <p>Title: <xsl:value-of select="@category" /></p>
                    </xsl:if>
                    </xsl:for-each>
                </div>


                <table>
                    <tr class="row0">
                        <th>Nº Pages</th>
                        <th>Chapters</th>
                    </tr>

                    <xsl:for-each select="//book/section/chapter">
                        <tr class="row1">
                            <td>
                                <xsl:value-of select="title" />
                            </td>
                            <td>
                                <xsl:value-of select="npages" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>