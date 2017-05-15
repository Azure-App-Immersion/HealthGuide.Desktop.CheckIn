import React, { Component } from "react";
import { browserHistory } from "react-router";
import Paper from "material-ui/Paper";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class StartComponent extends Component {
  constructor(props) {
    super(props);
    this.handleCheckIn = () => {
      this.props.history.push("/form");
    };
  }
  render() {
    return (
      <article
        style={{
          display: "flex",
          flex: "row",
          "flex-wrap": "wrap",
          "justify-content": "space-around"
        }}
      >
        <Paper
          style={{
            height: 500,
            width: 400,
            margin: 20,
            textAlign: "center",
            display: "inline-block"
          }}
          zDepth={5}
        >
          <Card
            style={{
              height: "100%"
            }}
          >
            <CardMedia>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEASABIAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAUFBQgFCAwHBwwMCQkJDA0MDAwMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0BBQgICgcKDAcHDA0MCgwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIAVECWAMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APqeoGLQAnSgAoDYb0oEJQAhp7AJSAOlACdKAFoASgBKAEpgFIBKYBSGNPFACUAHSgAoASgBlACdKAEoGJTATpSGIRQIaaYCUAJSGhpoEJQAlACUgCgBpOKAG9KYxtADTQA08UANPFIBjGgCM0wIjxQAwmjYNiJuKAITQMiPFAEJFAEJoDYpXA5oAoOKYFZhigCoy4pbCM+fvigZwvjEf8S2XHpn9QaYmfPcvDmq2RnsWUpDLcfShiI5ulAzNbhqGIuJwKBlhKNtAFNIBBTWgDhTAfQBFQBatB+8Qf8ATRP/AEIVLVgP09PBqSw6UAApBsFMAoAh6UyRelABQGwmMUxCUgEoAb0oAKAEoASgApgFIBOlABQAlMBOlAxKAEpANoAKACgANADOlACUDEPFADKBbbC9KCthM4oAaaNhbDelAbDelAthOlACYoDYKAG0AJSGBpgNNADDQVsNNAhtAhjGkAwmmMjNAEROKQEZOKAImNMdiNqBkLetIREaYEDcUAU56AKDGgCu1AFaUYoAzZ+KAOL8XD/iXS/7ppkvQ+dZuHNMksp0FMC2g4qREc1NaDM5hzT8mHoWo+lL0AsIcCmA4nFJIBBT2Ad0pgPpegEXegC5Zf6+Mf8ATWP/ANDWk+wH6eNwT9agsSgBKAF6UBsHSgCKmSFACUAFAhOlACGgBKAEoAKAEo2ASgBKACgBDQAlAwpgJQAlIBvSgA6UAFACUAMPHFAxKAEoEJ0oGJQA08UxCUg2GnigYlAhKBiUCEoASkPYbQMSmA2gBpoAb0pANoAY3FADDxQBG1AiFj6UD2IjTGRmgBhoGQMaBEROOlAET0bBsUphQBRYUAV36UAVZD/9agChJT2A47xYuNOmz/dNJiZ84T8OataEFmM8CpAtx9KNgGTcCgRlnrQMtpwKaDYsLQA40bAAp+YDxQA7tQBGBzTAt2X+vi/66x/+hrUMD9PH+8fqaksb0pAHSgBaACgCKqJDpQAnSgAoENoAOlACHigBKAEoAKAE6UDDpQAlAhKAEoGJQAnSmAnSkAlAB0oAOlADTQA00DEoAQ8UCE+lA/QaeKAGmmISkMSgBvSjYQlADaADpSGJQMSgQ0nFA9hpNACUAMPFACHigNiI0wGE4pCIyaBkJoAjPFGwyM8UwIzRsGxCxxQBEaNthkTcUCKU9AykaAIGFIWxUkGBmgCjIPSmBx/izjTZ/UKaBM+b7jBc1S7kE0fQUAW4+BQAyWkIzm609gLUfSgZYSgB1GwAOKdwH0IBe1ADOaYFqy/4+Ih382PH/fa1LA/T1+GP1rMsbQAtACdKYB0oAjpkhQAdKAEoFsNoASgYUCE6UAJ0oAKACgBKBiUwEpAJQAh4oASgBDQAnSgAoAKAGmgBpoGNoEJQMKBjDQIbQIKRQhoENoASgBtACUDEoAaeKAG0wEPFIBuaBiGmSRk0hjKYEZpARmkBExp7AMJxQBCTQMYaYyFqWwiM8UegEBNAFSY44pjKJNAiBqQFeUUxlGTigRx/ipcabOfRDQB823A+eq3MyWPpR5CLicDFG4yOWkIzjwarYZaj6UtgLCUAOPFHoAA4p2AeKAFzxQAzGaYF7TV3XcC+s8I/ORKl7Afp1J94/U/zrPYsbQAUAFABQBHVE+gUAFACdKBCdKAG0DEoAKBCUAFAxOlABQAnSgBKAE6UAJ0phsJ0pANNACUALQAUANoGNPFADaBCUDGmgBhoEAoGFIYwmmSJQAlIBpoGFAxucUAJQA3pTAbSDyG0DENAEZ4piI2oAYaQEROKAIjxQMjPFADDQMjbimBCaBEZNICA8UgKkxpgUmHpTC1iueKQEDHimMpyL3oEcj4rH/EtnA/55n+VID5qufv1pt6GY6LpS9ALsfAoYEcvFIDPPBp+oFmPgUAWUot2AcaNgAUIB1CAXpTAOlGwGpoa7tSs1/vXVuPzmSoew0fplL99vqf51JQzpQAtABQAlMBtMgTpQMKA2GnigQnSmMSkAlAhOlA9goAKAENACUAFMBDSASgBOlACdKAG0AHSgBOlAB0oASgBlAxKBCUDGmgBtAhM4pDG9KYCdKBDTSGIeKAENAxpoAKAGZxTAaaA2EpAJ0oAYaAIzTAYTikBGaAIjxQBEaZQw0BsRmkIjagNiE0xkTHFIRGTSApz8VQ9io3FICuxxTArP/KkIpytxxQByficZ064/wCubfyoEfNN0MSfhVogdH0o2AuRnigCKXqaLWAonrT8gLEVLYCyopeSAceKYAOKWgDulUA6jTYAFGwGv4e/5C1j/wBflsP/ACOlJjWh+l0n3j9T/OsyhvSgAoAOlABQAyqICgYUANoEJQMSgQlABQAlAbBTGJSAKAEpgIaQCUAJTAaaQCUAJ0oAWgBDxQA2gBvSgew2gAoAaeKAGmgBtACUgEphsN6UgE6UANNAxKAG9KAG0bAJ0oATpQAlAhh4oGMNAiM8UbDImoDYjNIZAaY9hpoEMPFMZGeKQiE0ARH0pARtxQMo3HBFPYNioxoAiOKAKzigCk47UbCOU8SjGnXA/wCmbfypAfM91/rPwrRGY+PgUAW4+KGBFKecUbbAUjwaYFmOkBYWlsA6gAHFDAd0poBRTAWjYDa8NLu1nT19b21H/keOpYH6Vv8AeP1P86gsZQAtAB0oAjpDF6VZmFAwoDYSgBtACUAJ0oAKBCUDDpQAlAbCUBsFMBDSASgBKBiUCGmgBOlABQMKAG0CGUAIaA2DpQMbQA3NGwhpoGJSAOlAbDDQA2gYmaAGmgBKYxtIBvSgWwUANPFAiNuKYxnSgCM0h7EZoDYiagERE0gGGmAw0FEbcUhEJNMBh4oEQtSAq3A70AUGpjIWOKAIHJHSgCi5pAct4m/5B1xj/nm38jQL0Pme6+/x6VojPYWKgC4lAEMxwaOoFNutPYCxHxS8wLC8UAOp2ABUgP6UwFHFLYNhRTA3/CY/4nmmj/p/tf8A0fHSewH6St1P1NQWNoAKACgBlLYYtWQFABQAlADaACgQ2gBOlABQMSgAoASgAoASgBtABTAaaQCUANoHsHSgQdKAENA0M6UAIfSgBKAGdKNhCUANoGJnFADaQhM0FDDQAh4piGmkMTpQMSgQlADelADc0DGGmIYeKNgIzSAjPFICI0yloREYoEMNADDxQPYjNLYCI8UARE0xEbHFICjMaYbFJjjigZEaAIXpAUX4oA5nxIM6fcAf88n/AJGgTPmS6++PpWhmER7UdQLkdGwEFxwaEBUbrT8gLUdTsBMvFVYCSl6AFKwDsU1oAdKYB0pAdD4RG7XdMU9Df2v/AKPSpYI/SVup+pqSxKAEoAKAGVOwxa0ICgAoAbTASgBKQhKAEoATpQAUDEoAOlACUAJ0oASgBKAEoASgBvSgAoAKNgENBS0IzxQISgBDxQA2gBKBDOlIBpoGJQGw2gY3pTAKQbDelAxKBDaAEoAaeKAGmgBhpgNoAjPpSAiakBEeKYyKkMaaYDDxSAiJoAjNAehE3FAiE9KBlKfj8KBbFFh3pjIiaNhkLGgRTk9+9IZzXiDBsLgH/nk//oJosB8yXYw4PtWiMRsR4oYF2OgCCfg4pICqaewE8ZpATjimBLSAaKe2gD84pAKKoA6UgOi8Hc6/pg/6f7X/ANHJUvTYaP0jbqfrUlCUAHSgA6UthjM4pDF6VoZBQMSgBKAEoEJQA2gAoATpQAUDEpgJQAUAJ0pAJQAlADaAEoAQ0AFABQA08UeQxlADc0AIaBCUihpoF6DDQAlACUDGdKAE6UAJQA3pQMTpQIaaQbBTAbQA00AMNAbDCcUAR0ARNxSAiJpjIzxSAYTigZExoAj6UARmgPQiNGwELcUCKcvagZSbigCA1QyI8UgKj4zSA5vxAcWM/wD1yf8A9BNIR8x3fUfStVoZDYfSh6AXk4qQ2ILng8U0BTPWmBYipWsBOKrzAk7VI/IQcUAOo20AUcdKoAPFIR0ngoZ8Q6YB/wA/1r/6OSpeg0fpATz+NQWFMQUAFAEZjX0FIY/pVkBQAlACGgBOlAhKAG0wEpAFACUD2CgQlAxKACgBKAG0AJ0oASgY00CAcUDCgQ0mgY00DGdKBCE0AJ0pAIaBjDQIbQA3NA9hvSgBpoGJTASkISgBKAEpDE6cUwGtxTAiNADDSERk0ARMaBkZNICM0wIzSAjNAEZoAjNAyFj2oAhY4oApTHA4oApNQBGTigdiCSjYCo1L0A5rxINmnXPb90//AKCaZLR8zXnUfStFsZjYRgZoEXIzSGQ3AwfrR6AVMYqgJ4uDSAsDijyAeaQAOKB7DqBAKYAaNgOp8CDPiTSwf+f62/8ARq0npsNH6MnrWRYtMAzQAdKAFpgLjFUZidKBiUAIaBDcUwE6UgGmgBKAFoAb0oAWgBtA9g6UCEoHsJQAlACUANoGJRsIOlAxOlAbDaAGnigBhNACZpDGmgkTpTGMNIBKBjelADScUANoGJSDYTpTASkISmA2gYlADCaBDDxQMjPXigRETikOxGaYERpDGHimIYaQyM0ARHigRGTQMhY0AQNQBVloAosaAGdORQMrSHinYCq3IxU7Acx4lb/iWXX/AFyb+WKYj5qvOoNaGRFEcUAXYzigCG4PIxTAq0ATx8UtgLFAx9IBKewth1ACjigYhpbCOq8BceJNL9r62/8ARq0ug0fox0NZlhmgYopAHSmAdKNgH1oZiUBsJQAYxQA3pQISgBpoAbQAUAFACdKAEoGJQAlACUAJQA08UAIaAEoHsJQAdKAGk4oDYjJxQLYTpQMbmkA2gQUDGmgBlAxpoAaaYDaQxOlAtgoGJ0oATpQIbQAlICMnFMNis88YJTeoZQCeR8ucgE54ByDgHkgdMVNyrWMF9Qnd3hIVdmBuSQDcHBUsx6RCIhmYE8/ux94lazu9irJF6CO56zyLjj5Yx6f7RxweM4HPrzWi0F6Fk1QiM0AMPFINiImgCMmgCMmgCEmgCFjQBExxQIpynFA9ik3FAyHPpTDYryZFICuxI9qBHMeJeNNue/7pv1FAM+brzgj61ojIgio2AupxR0AiuDg0kBU6GmMsRc0thE+KfkMeKQbDRT8hDxxS2AWmgENAHV+Av+Rj0z/r+tv/AEatJ6IaP0WPWsiwoGL0oAWkAlPYCetDMaaAEoDYSgQnSgBtACUANPFABQAhoATpQAYoAbQMQ0ANoAbQAUANoGJmgQmaAEoAQ0DGHFADM0AITSASgBtADelAxp4oAbmgY3NAhKQ9hKYhOlADelGwxDQIbmgexHI4jUuQSFBOByT9KT01GZcOpGRCzxmJs/LGWBdwPvMAARj+7z83crxUc3Uduhh+Zc3kzSQbdr42blX5VwRvPGckHaWByQBjk4Oau3oU7I17bTIbVQu1XZf4ivPr3Lc55znqfpWqSRNy43HPT9KrYNiMn0oERk4o2AjJoAiJoAjJo2AiJoAhLYoAiJoAiY9qAKc3yigCixoGQs2BxSArM2DTAru2BTDY5nxI/wDxLbkf9Mm/lRYVz5xvO1WZEMVDAuqKAIZ+v4UeQFU09gLEXFSBPmgY4HFACUxDqAHCjbQBppAdX4D/AORi0zt/p9t/6NWk9ho/RYnBrM0DNACigBRSEFAE3StTMQ0DEoAKBDTQAh4oAbQAmKAE6UAJQAnSgBKYxOlADTSASgBvSgBOlACUANNACdKAENAxuaBEdADaAEpDGk4oATNAxpoGNPFMBtIQnSgBOlIYlMBKBDelAxppANJp7AVLu6W1hebhvLGcZ6n+6P8AaP8ACO5wO9RJ8quUlc5yzE1wXvY38iFydqqvzyc8Bt3T5jgbflJYnBGDWaV9dim7aG7bwmCMBzucgFmAAyfQYAGB0Xjpz1JrVLlRDKF1qcMCg70HzFWTOX6HIXGcOCD1GOCe3KbsOxBaJLcoHmaQxkEBHAXzBk4Z1A44wNp+9jcQAQtJLqxvyNE8VZJGxoAibigRGeKBkbHFAEJbHSgCEmgCMnigRCTigZVmPXFAyg1AiFjSGV3piKkjbaewbHNeJD/xLrgf9Mm/lRsSz51vP4atEEEPFAF1eKAIpjg0rAVKoNizHxUATUwFFMAoAUcVQDhUgIaLWA63wB/yMmljp/p1t/6MFS9hrc/RM9ayNA6UAL0oDYUGgApgWcVoZiUAJQAlADaBCUAJQA2gBOlACUD2E6UxCUhiUwGmkAlADaAEoASgYw8UCCgY00CGGgBlACHikPYZQMaaAEzigBM0x7DKQCUCEoASkAlMY00CGnigY08UARPIqcMyr9WA/r+VTdLRjscvqiM58mOQJ5nHmH72AQecApKG27eQG4wccE80t7Gq0LelWiQg+U5ljQjazMTl9o3HB4VUzsRV4XLdSBW8VbbYzYyxvZ5BMkyjzYnOcEKi52iNN3JLuMMWACruVfSnewWMq1ifUHlb5IkkkSRwBuYMoKjZwFU4GMnOTlgpyTULXyKemh0oG0ADOAMDJJPHqTyT6k8mtSBhNAERNICInFMLEZo2AhY0AQnigBh4oAjY4oAhagNinIaBlFjz6UmBAeKBELGnsMpyE4wKYHNeIznTp/8Arm38qCWfPF3/AA1aMyvHQBcXigCOagCrVAWI+KgCen6AHSmGwopbAOFMYDigQhoA634f8eJNL/6/rf8A9GColtYa3P0TPFZGgZoAM0ALQIOlAy50rUyENADTQMSgBDQIaaAEIoDYaeKACgBtACGgBKBiUAIeKAG9KAG0AJ0oAYaAG0AJQAh4oHtoNoEMPFIBtADaBiGgYw0wEpAN6UAJQA3pQMaaAGk0ANPFMBDSAYaAMvU2VreUqiTSQru2scYOCcludpC5I/pnNZy29Clp5HGqHvpHeNS2EdiFYCOIkAHaxBL5Ccqm05LKcEYrC3Vf8MaXtob+nXCadZ4kd5miG6TYGkKbmPy8AMGUZaTcAwOWIHArVOyIa1Mtoobtn3uVjMvLZYGQ4UDzFxy7KqbYwB/eKlqhWe5WqOnjRIUCRAKigYAGAB/n159a3WhAE1WwiNuKQiJjSGRE4pgRk4oAhY4oAhJoAYTQBEzYoGQscCgRTn6YFAbFA8fhQwImakgIGP4VQ9Cs/AoF6HM+IQBp1wP+mbfyoEfPV5xiqXkQV4hzTEXV4o9QIZ+ooQFamBNGalgT57UALQAo4pgOpgKKPMBpoA6zwBx4j0vH/P8A23/oxaiQ0fomayNA6UCCmAo4pALmgZerYyE6UgG0DE6UBsJQIb0oAb0oGJQISgBtACYoGJQIOlAxpoAaaAG0DEoAYaBeg00AJTAQ0gGUANalsGwygYUDGmgQzpQMZTASkAlADTQAh4o2AZQMaeKBbDaBlW53BCUcxkA4PUA9iV6E5/Htz0qWNHCk3cCXDTOwhdiWBG52bJDlFypHq3oFUKDjNcd2ro1Lei7kd4lUiLKxpuyu1VYMERDyRzIzSnAfdhQdvGsWJkTMNJD3ETvNuu2cBdoRvM37gcbQNvK4IO5lUgEgkDfLqg8jNsoLi5leREEgBwS7MBuGe+BlVB2DgnOcAYqIxb1Bs7O1WWOMLMU3DgeWpVQAOgyTnHbgcYHJ5PUtCCZjimLYgJoAYTSAiJoAjJoArsaYDDQBETjpQBE7YFAyuTQIqzmgCmxxxQBXfgUwIGPFAFZzxigRzXiBs6fcf9cn/lTJPn287VSEV4uDQLYuLT2AhuO1L0ArUATpR5AT0WAUUgF6UAFMBRRYY1uKfoI63wDx4j0z/r/tv/Rq1mxo/RPPNQWFIBKAFoAWgDQrUzEo2AQ0DGmgBKBCEUANoAbQAlACUANoAKNgE6UANoGNNADelACGgBhoAZTASkAUwGHikAw0ANpAIaChlAhpoGNoEJQMSgBjcUDG0AZl/cFAIU+8/XHUA9h7t0HtmuWrPl9yO7/r8TqpQv78tlt/XkUXnls/kbcjD+FwQfybB/KuXmnT01XqdXLCeqs/QeupttOVBODjBxk9s5BwPpW6rtboxdBfZdvUrtqUzLlokBBzjcT0UkFc4G/d93PHToatVU/IxdJxK39mpdFgC6hizfMzMeSu4HkbRuwdoztyQDzTUVLVENuOhy93JJbTywu0gHyswVvKRGVvkZWGWJccADC4YhsnkZ/C7DNG3S3vRi3jxHNjBY9CFw4Un5jhgcE9fmOcVa9526C2OphhW3QRoMAfqT1J9zXT6ECscUCImNAEZoAjJx0oAhJxQIiY0DIjQBGTgUAQk0AQsc/hQBCx/SgCpKaAKTHHSiwETHtQgK78c0xFORuKA2Od8RELp1xj/nm1BOx4BedBVklaLg+lDAuJSAinoQFUVQEycUvQCwKQC0AFADqoA6UAI1K1gOs8Bf8AIxaYP+n62/8ARi1LGj9Ec81mWGaADNIBc0wDOKANTFaGYnSgBpoGJQGw2gQlADaAEoAbQA2gAoASgBOlA9hpoAb0oAbQA08UAIaAIzxQAlACHimGww0gGmkBGaYxOlACE4pAMNAxtACUCDpQBGaB7EE8q26F27dB6k9BUSkoLmZcI8zUUT+G9Oa7mN/OPljPyZ/ik9R/soOn+1j0Nc1KPM3Ul8vU6qslBKlHTv6dvmdhqEkSIBPH5yE4xtDAe5zwP511u3VHEu6djnX0PS77mAtbsegU4H/fD5H/AHyRWDpwltp6HSqs4+a8zC1PQJNLXzTJBIh4USloiT19wTgHjcMjOKwlR5dU1bz0NVW5tLNPyOEL3McwBfZmSQIUBZFOwkl2TKKoQNg5LbivykgEym09NiXZ7kd180kUUinzHwoChQcJtBLkljyvC5IY5LEKSCae6My7ZXqvKGmJjaMlFwCGzjMm6PGFjVern1OBgg1rB9+hLVtjoVuIpG2oyseeF56deen610Jp7EbCmmIjPFAiInbQMiY0DIWoAhNBJGTQMiJpgRHigCInFAyuxwaBFOVu1Aio5xwKWwyEtigRC5yKYylL0o2IOb8Q86fcdv3bUAeC3f3R9au1hFaPrTEXF4pbAMn4FMCn0oAmWlsBMDigBwoAKQC5ppAOFMAbihoDrPh//wAjJpf/AF/W/wD6MFS9Brc/Q7pWRYUAFIBaAEzigDY6VqZjaAEoDYaaBjaBCGgBtADTQAhoAbQAGgBKAEoAbQMbQA3pQA00ANJxQAw0ANpgIaQDTxQAw8UCGE0DG0ANNAxKQDaYCUhiGgBmCfu1nOfIvPoaRjzPyMaOKTWLpbaM/Lk8joqj77n+Q9eAOtcV3Wkl0/I7rKhFy6/1oegG7h0vZa+W6Rj5I2Aypx2J/vNyeep75OK9Be7otkec9Xd7msDx6Z/zyKokqTWMM33lAPqOP/rfpSsO9jNllTSo5EljnuY/vgLEJExjHlqBnJBXJ3DksMcdJ+Hux79keTeIr22Fzv0wvFCrlfJjULvdlYzNhgNi8BOCcnJwFNcU2r3jou35nQk0rMz7G0hs4yzFt8219jfM64+YPgeu0E5x0546PbUTBLL+0ojMGwFmkcHn5gVCgOTyVDAE7T80YAzWkVdXMr2LmkagFslkuPkPzHIHEhBO7ykHzsFOATt+ZycDFaxeg2bIfeAwBGRnBGCM9iOx9R2rQkaaAImNAELcUARE4oGR9KCdiJjTGRMdtINiJjxQBAfamIgY4oGU3NAilIcHigCE0AQsc8UBsVJKZGxzniE/8S64x/zzP8xSGeEXfC/jVokqRcHimBdXip2Ajn6UCKgp+gyZeKNgJhxRsAvSjyAXOKFoAtMWw7pQMa1IDrPATbfEWmH/AKfrf/0YtJ7DW5+htYlhnFMAzQMM0hC5oA2q1MxvSgBDQA2gY3pQAlACGmIZ0pDEoEJigY2mISkAUDG9KAG9KAG9KAG0ANPFADTTAbigBMUgGnigCM0AMoGN6UCGnigoQ8UgG0CEoDYaaTfKrvYpLojP1S6+zx+Qh+dx82Oyn+rdB7ZrzJy53f7kelTjyr+tzrfD+lf2ZBucYmlAL/7I/hT8Orf7R9hXfTh7Neb3/wAjiqz53pstv8zerY5woAOlAHP+ItV/s232RHE8+VTHVV/if8AcL/tEehrnqz5FZbvb/M6aUOd3ey3/AMjyHyRfTeVjMFtgynAwWb7sXPfafMc9Qu1c4euOEebV7I6qjUdFu/wHTRva28siMrGMEnI7Lnoc5C7RtweuOWzknVq0W0cjLVnM0cYtfLO4AKcYCgGMNuPcj7wz3IxwCK6Y6JR8v0I8x0dskjoWT/VJG+7PBfaVGB2xyT6/LnOBVAXjxVEkbHFAyKgCJzQBEaBEZNMCJjigZE1FgITSDYiLYpgVWOaYipK23ikBSY09hkROKBELHFAio57UiTm/EeF064/3P6igDwq64UfWtBbFWPg0AXV4pAMm6Uw2KY4ouBKvFKwEwosGwo4pbBsKaAHU/IBRR5AI3FG2gjqPAvHiHTf+v62/9GrUvRDR+hx4qDUM0gDNABnFIQbsUAb1amYnSgBpoASgNhlACdKBiGgQ2gBDQA2gBDQAlACGgBtADTQMbQA2gBpoAbTATpQAh4oAaaQERFADaQxDQAygBpoGNoEJ0oGNkkW1jMz9B0HqT0A+v+JrhrT+wum52Uodf6sM8Pac17Mb+5HyI2UB6M47/wC7Hx7Zx6GijC753029e5VafKvZx+fp2+Z3B3Dk5+o6f1H4kZ967jgHq4I/z/Pp+tMB/SgCOWVLdGlkO1EBZj6Adf8A63qeKTairvZDSu0lueK+INbeR2uypaSRlit4h1LMcRRj8TuY9PvGvHnJybl93kezCCguVfMk0jwwdNRnkkkM8hLySF/ldmJJ2qDtRV4ABySMcnHApNbOxDs90c/qOqW8gns0fc7fIQP9okN044zyPUjODmrVR2af+Ryyh2OmIWTbIhwMqCR3Xjg+2cAj6ivSVnqjm20fQbb7vLG7qfT3+6Prtx+p6VRI88UDIyaAIScUwIjSAjNAiI8UxkTUAQMccUwIie1AEDHt6UEkLcUDKcx547UvICi5pgQtxQIhbNAFeTgUkTscv4kONOn/ANz/ANmFPYDxG7Hyj61QinHwaYFxaQDZh8tOwFPpRsBKtAEy0ALS6iFPFGwxRSXYBwp2sAjdKAOm8D/8jBpv/X9bf+jVqHsNH6Gk8moNBM4oAM4oAM0CEzigDo60MxKAG0AJQA3pQAlADTQA3FAxp4oEJQAlABQA2mPYaaQDDQAnSmA00gGmgBtMBtAAaAG9KQEZoAZ0oGhho2ASgBhoGNoFsPRdxx2rGpLkWm/Q1hHmfkZYRtaultoeI1zluwUfef8A9lT149TXnwjzuy26s9CUlSjfr0R6CkUUCLDH8iRgKvoAOOT1BPcnGck816qVlZaI8ttt3e49V8vkDg88dP0/w/GgQ75G9v0/XoaA2FCFTwcf59On5AUAcL4p1MO/2CE/LGd0pz1bqEz6L1YeuB/DXBWn9hbLc9ChCy53u9v8/mcX4atjrF02quP9GgLRWYP8R+7NcfjzFGf7ocjrXEdknZWHfETxMPD2nMkRH2m4/dxL6ZHLEeij5j64A/irWKTZhtqjxbwxmUByeQcv1zu8wEn/AIH5hbPqvtUT90jaz8z2Xe0UCRqpYMJN5BxtyT82T3BOcDlvUYr0oaRXockviZIUkkZmOwLsCx/eygI5Ocgc8HgZ42nK1e5OxKiMmcsOpOAOg7Ac4AAwOB27ZObSsL0EPFMQw0ARnigCJjimIhJpjI2pCIH4oAgNGwETcDigCBhQBWlwBmgNjOY5NMRCx9KNgIWNMRXkbFLYDlPE5xp03bgf+hCnsI8Vu/uj60xFWPrQ9ALaUAJN92nsBSHWgCUccUbATL7UW7AO6U/IBKmwhwp6gOHFGowbpS8gOm8DceINNz/z/W3/AKNWk9AR+hBPNZlhnFABmgYmaQBQB0vStTMKQCUAJQA00ANoAaaAEoAaaAG0AJQAUAIaAGUDGGgBKYDTSEMNAxp4o2ASmAlACGj0AiagBlIaGmgBKNhbDTQUNx6UPTVh5Ioapc+Qgt48+ZJ1x1APHT1boPbPqK8qcvaS09EenTioLXp/X4HX6HpP9l2+GA8+QAye3HCfRe/qcn0rvpw9mrdepwVJ88r9FsaZAXr8mPxX8Dxj/wAdrUyFUGLoOD6f/WHH5fjQBJxnpg+46/j0NAGRrOprpVt5i481srEpH8XdseiA5PrwP4qyqT9nG/XobU4c8rdOv9eZ4dqfmarMmkW7ETXmXnl53RW4I82TP9+QnYn+02e1eU2ev8K/I9Ojjg0m2AUCKC3TAA4Coo4H5Dr+JpJW0MXqfJHivxA/ifUXusnyQSkCnjCA/ex6uRn/AHdo7V2JcqM9/Q3tAQ28EjjjA/lg5rkqDkrR9Ge+29nGbaOR8q0luHPPcqCccY43dMdK9VK0UvI4G9fmC6ZN5aspDfIvH3cnHJ5468Dnp9atKyIZSlRoTh1Kn3GP16VQyuRQBGaA2IzQBEaBEJ4piIiaBkD+tAiE+1AELUDIqAKkw7CgRnvgGgCIigLEDCjYWxWkHpRsI5PxSf8AiXSj6D/x4UxbHjF3wo+tUBUj60gLa0bCEm4WnsMqCmA8cVO2wEy0AOoAKBDhTAUUegCsOKHoB0XgnK69p2Ov262/9GrUvYZ+hJIzUFhnFACZxQAZxSGJuxSA6mtdiNhKLABoEJSAbQA2gBCKAG07ANoAKQDOlOwBRYBpoAaRikMZQA2gBppiG0bDGmkAhoASmIaaBkZpAMoHsIaYDOlACdKQyOSVbZDM/Reg9Seg/H/E9q4q07e4vn/kdNKF3zfd/mS+HNMN1MdSn5wT5Y7FhwWx/dT7q+/P8NKjC3vv5f5mladv3cfn/l/mdzXccAlAbB0oAZJIsKmSQhUQFmYnAUAZJPtiltqxpdEeM+JNeVt+oXGUiQYRT1WIcqCP78h5Yf3iF/hFeVOXPK6+XoexTh7ONuvX1JvBmkS28L6hertvL7Ekin/llGP9VAPTYpyw7ux9BWO/ohyfRHFfFvxP9nhXRrZsSTjdNg/djzjb9XOV+m/2reEdbsyeistzwi0i3Mo9+PwrWWiJjoz1HSoALZlYcMMH0wSo/wDrVxSN56RZ7ElyLi0sljI/eLFGegPzRhXPP93njuQfavWvdRt5Hl7XOoyB04rczGnng9PQ0bAZ82mQS9B5Z9V4/TpQBkz6PMn+rIkHp90/keP1oKMaVGhO2RSh9CMf/r/CkBXNMkibimBGaQyJqAK7cUySJqBkDUAVJeKQii4xzTHsQscdKA2K9Aiu44oEcn4pG3T5cei/+hCmhHjV390fWmBTj4NAFtaVwGzDK09xFMcUbbDJRQBKvpRsA+gQlKwbC0/INhw60tgBulMDovBRxr2nf9f1t/6NWkx7H6Ck4JqCwBxSGJnFABmgBM0gOurUgTpQAlIQdKQDTxQAnSgBKAGGmAnSgBDQA2jYBKAG0wG0ANIpDG0ANNMBvSkA00hDelMYnSgBp4oAjNAAI27A0D2HeQ3sKAF+zep/SkArQxxjJzx6mplLkTZcVzNJGFHC2u3awRnEEXLEdAO7fU/dT8/WvNjF1ZXfqz0G1Rjpv0PR40SBViQBFUAKOwA7f569a9NaaI8zfVklMWwlABQBwHijVftEv9mwnMcRDXJHd+Gjg/DiSUf9c0PVhXDXnb3F8/8AI76EPtv5f5nmcEH/AAlGsCDG7T9MZXmP8M1z96OL0Kx/fceoAPWuHb1f5Ha3Y9M1jVItDspb2c7ViUt9TjgAd+eAO5wO9Ul0MT401HUZdXu5L245lmbcfYfwqPZRge/XvXalZWMr31L+mxBnUfWsJaGsdz2Hw0gUqjBWDDBV13KTuBGQfYde1Zw3Lq/CvU6yLDFYE4ZbqRNp4CopLnaP4QE5Xbggng16C0sjzX1O0Ld66DMAaQDh7UxDWITlsKPc4/nilsOxnz6lZINs0sRHpkN+gzUOUY9SlCT2TOVvdR0j/lk0gb/pmvy/k5H6YqfaRW1zRU5dbIwxfxueM7ex4/UDP9an2q6ofsn0ZOHD/dOa2UlLVGTi49BpOKsgrtRtsBE3FAFdj+FAFKbgUBsVGNAFduKBEB44oEQyUbAcj4sbbYSD1wP1FAHjl0PlH1qhFNBg0xFleKQxZvu0AU8UW7APFAiVeKQx1PbQAoFsOAxRsAvSgYrdKkRv+DONd07/AK/rb/0atIaP0DY8mkWFIBM0AGaAEzQB2XStCQoEN6UAFKwDTTATGKQDTR6ANoATpQA2mAh4oASlsAhpgNo2GNNADDQPYb0pEjaB7DDQITpSAtW1obndtIBXHBzznPcdPyNMYjQ+Udrrtb0Pf6HofwpDFxjpTEJSGJ0oezsC0AKD04P+etedGcoO34HY4qRxfi+8vbGIGGJmgOfMkT5to75A+ZeOAcY65PSic+eyWiLpxUNepzOj+IXh/eWkmw8ZHGCOwZehH+QRWSbhrF2OhqM9JL+vI9N0vxbDdgJdgQv/AHhzGfqOq/qPeuyNZPSWn5f8A450HHWGq7dTrUIKhkIKnoQcj8DXT6HJtoOyB14piOe8Sa3/AGLbgRYa7uWMVsh5BfGWkYf884V/eP6/Kmdzispy5IuXXp6mtOHPK3Tr6HiviHUn0W0S2tcz3945ig3cs8shJeZ/xJdj0B6dMV5W92/Vnr/Dovkd54V0JNAsY7RTvZctI56ySvzI5+rdPQADtUrXUzl2PFfiv4o/tC6Gk27fubbDS4P3pOy/8BHzH3K9xXXCPVmMnb3UeRQ/M30BrR7Eo7LSLYFuRyAK5ZPodUEeraFZGV0QHbkgA9ACc5J9gMn8qKa1FVeljWncwXU7QsCArTx4AydgWGbGRw4VflyOScEYBrvWjPO8hbXWbvk2tvczjHBmY7PqFVFUfgafNLpErlit5L5F0Ta9c4xHBbA/3iuf5uf0o9/yQv3a7sd/Y+p3H/HxelR6Rhsfp5Yo5JPeQc8V8MUSp4Stm+a4lmm+rBR+gY/rR7Jdbv5i9rLpZGtB4b06EZEKv7uWb9CcfpWihFbIzc5Pqa0NrDbjEUaR/wC4qr/IVe2xF2Ub3QrLUOZYwH/vp8jfjt4P/AgahwjLdFxnKOz+RyN54PuIMtaOJlHRW+Rx+P3W/NfpXO6TWsX/AJm6qp6SRzziW2YxXCtG47OCM/Qngj3GRU88qekvxL5Iz1j+A3cDW0aqfkzF03HYiY10Jp7GTTW5AxpiKsvSkBQagCBjQLYhPFAiFuaAON8YNiyYd8r/ADoEeRXf3B7mqEUk4NPYC0vFIAl4WgCmOKPQY8UCJUpa9AJMU9gFxigApbDFFMQGjqGxv+DP+Q9p3b/Tbb/0atSxn35u5NSWKHxQAu6gBM0CDNIZ29aEjTRsAlABQIaeKAEoAaaNgG0AJRsA2gBKBiUCG0AJQMaaBjKAEpEjTxRsAymMbQBsaR/H/wAB/rUgbDosg2uAwPY8igRmzadjmE/8BY/yb+jZ+ooGZrIUO1gVYdjwf/rj3GR70DE2ilsMrTLInMeOOoPf/CuWcebY6YNLRiR3Qb5TlG/un+h6H/PFcbTjudFuxymr+DLLUsz2+bO4JPzxj5GPq8fA+pTafXNSmPY4O7t9Q8OHF+m6LOBPHloz9Tj5SfRgp+tVbsaKR0mjeIZbdQ1s/wAp6qTlPxXt+h96qMpU/hf+X3BKMZ7r/M7+y8XW03yXQMDY+8AWjP5ZZfoQR2zXXGtHaWn5HHKg18Gv4M85uNTa/uZtYvv3CBCkMb8G3tUOeR/z1mI82XHfZHyEFcdSftHpt0OynD2at16nN+B7eTxPqMniS5XEKZgsUP8ACgPzSf7zdM/WsZae4vV+vYq+nN8l6HoXjHX08MaXLdcGXbsiX+9I3A/D19ACe1XCN3ZGLdtT42eaSdmllYtJISzMe7Mck/iTXdtoYli0Hzfl+prORpE9H0mLOSe3SuOTOyKsexeGLcMWJHAilYn3ZCikfTOR7muimrI5qr3/AK8zPtIrdpomwrLIZUyfR0Eqgn+8HR17H+ddcbbnC7o6vTm8qJbZmy8IKcnkqpIQ4/3NtbIzZqL/ACpiHCMZyPl+n+cUAGCn+K8H8R0pgAbAz29V4P4jpQA4TN7Eeo/qP8/WgROkoP8A9bn/AOv+h+tAicY7UwGy2qXCFJFDoeqsAy/ken4YqWr6PYpNrY4/UtA0xMlZ0s3/ALpcMv8A3wTvH4H8K55Qh35f67HRGc9rXRxckYicorJKo/iTdtP03Kp/T8TXLflfuv7jptdaqxXeFQCSQvpnAH61tGs1uZOkvslAwPKrPCPOSPhmj+cLnON23OOh6/nXXGSlscri4uzMssDVkkTjFAiEigRC/FAHD+L+LQ/UUxHlN19wfWnsIorwafkBcFIAlHy09gKXSgB44pbATqMUAO6UJWAOlACClsAvSntqgHU/QZveDTt13Tj/ANPtt/6NWptoB96E4NSWG6gBd2KQBvxQIC9AHf1YhtACUAHSj0ENNADaBidKAGUwEpABpCG0xjaAEoASgBpoDYZQAlAbDTQAw0bANoA19IYKzqTgkDA9cZ6UhG5ikAYoAjlhSYbXGR29R7g9QfpQGxmS2Dx8x/OvofvD+jfofrSKuUsA/h+n4dqyaNivLbq4wRUONy1K2xRKS2/3fnX0PUfQ9/ofzrmlTt8JvGae+haSaO4jKNhgeGVgDwexU8EfXisdUU0cRq3gOGTNxpL/AGSXqYufJb2HUx59tyf7IpgnY4qS/uNHk+z6nG0L/wAJP3GHqrDKsPdT9QKm3Y3UjjvFurPrtzD4dsT807K1y6nhY8525HqOTj+lWlyrnfy9RN3agvn6Hvuh2EWl20dtCAscKBF/Af5J9zXOt79xS7I8A+JWuHWtR+zxHNvZkoPQyfxN/wAB+79d9d9Ncq9Tnl2XQ83ax8ztg+o/zzWxmT2unSxuDjcuRyOCOeeP8M1lJaGkXqej6RHlcf7WPxrha1segmkvQ938Kae6BmKlAzRIueDgOCTj6KPrXoU4tNX8jy6kk9vM85j0fUbXbeKImhWcsMMd2Hdo/nQjb1bkhvlBNVa2qIv0Z02oyLYxxz3cL/O2x2UgSRNjjBBwwO0455wO+RVOXLugUb6Jmlpd090yi2mjuYADv3lkuE44+QKQ3PBJKjHIJ6VpGSls/wDMiScd1b8jekikYYibY3qVDDpxkHtnnjBPTNWZiRmVOLhVQ8/ODhDj2YgqT6fN9aNhehXnv7CE5kmjUj+624/kuef1qXOK3ZahLomZb+IbGM4XzJW/2U2c+uSRn2O2s3VitrmipSfZFC48WpEDshRR1zK/88Bf51m63ZGiod2Yknjeec7IZAT2W3iMjfTgOc/jU+0m9vwRfJCO/wCLISdZ1LpDdMD/AM93EK/kzZ/8co5Zv/gsOaEdvwRYg8J6jJzK1vbg9l3yv+f7tf5/WqVLuyXWS2RrQeColGLi4nl9k2xD/wAdBb/x6rVKK31M/ay6WRr2/hjTLY7lgRmH8UmZD+blq0UIrZIhzk92zajjWEbYwEA7KAo/IYFWZmVf6BY6nzPCu7++nyP/AN9LjP8AwLNMDi9Q8Av96xm3f7E3B/CRRj81H1oEcPf6VeaacXUTxDs2Mofo65T9c+1MDJfpxQI4jxb/AMeh+o/mKaEeU3Ywo+tMCgg5oEXQKPQAk+5xTApUDJF4pbATCmIdigBKW4bBSAUDFMA6UegG74Q41zT/APr9tv8A0atIZ95scE0iridKA3EzSGJnFAhpagR6R0qgEoASgBvSmAlIBtADTTAbQAnSkAUbCGmgYlADTTASkA2gBp4oAaeKAGmgBtADTxQGw0HHSgRq2uqNH8svzL69x/j/ADpWGbkciSjchDD27fUdvxpCJKQBTAgmtkn5YYYdGHB/+uPY5FA07GVNavBkkbl/vL2+o6j6jI+lRa2xomVcAiosWVpLVW+YcMO44NZOCZopNEW+SL5XGR/eH9R/UflXLKDjsbqSZFdQ29/C0dyiTRYJKuMjI/UH3GCOxrJF2tsfJvhnSjHqdxeRhow1xL5QJJYIJGCLuPPQDrzjrW05XVl0FCNndnumua2+kaWWU5uJB5cX+8Ry2PRRlvwx3qIRu0VLQ8Ji05355OeST1yeuT6k13WOY2LXQXYDjFOxJ0FroO3B24NFhpnU6fpcVnIk04xHGwY84+g/Mio5Ve7Kc2lZdT1bSGG2Mp90vuHfhVOP51qtGjnZytlqNtZWai5kiiVg2fNkVBgux5DEf/r5FJbB1Oe8ReL9D1KD7FNqVsI2wS0RLyrKrBkbcqMGHVWBByDz1qXZ6PY0inF3S1OZiMaqJbCeO72jKvbsVlwD18o4k69dm4ewrn5bfC/8zrumrTVvyEk8WXkzeT59w74wUjR93TjIjQNk9885681ac33M+WEewsVpqt8RstLh8nhrhhGPX/lo27t0xnjpR7OT3/EXtIx2/DQ1Lfwrqs5O6S3tgPvBQ8zL7HhFz+P6Vapd2Zur2X3m3D4EjB/0q5uJT6KViGR1HyqW/wDH60VKK8zN1ZdNDZt/CelW5yLdHYc7pcynP1kLVoopbJGbnJ7tm/FCsI2xqEHooAH5DFUSSYpiFxSAMUAJjFMBMYoAMYoGGKQCEZGDyD1Hb8R0pgcvqHhDTdQJby/IkP8AHCdnPqUwUP8A3yPrQI8j8XfCzU7i3YaY8V3jkIxEMmPbdmNj/wADTPpTvYR826/pF9obeTqNvNaPnpKhUH/db7jfVWIqhGBHyeKYi6BSHsOcfKR1osIoUBsPWgCZaQD+lPYBtGwCgUWAWi3YBaA2Nvwidut6ef8Ap9t//Rq0hn3ezgE0DEDUABOKQDc0BsMPFIPQ9MqgCgBOlACUwGmgQlAxpFADelACUgEoAaaAEpgNNACUANpAMoASmA00gGGmA00AN6UCEoA4HWNXudJ1ZpbRzGwiiBHVW+8cMvRh9enbFc05OMtDtpxUo2aO/wBA8bWuqKI7rbaz9ME4jY8fdY/dznhW/AmqjNPTZmU6TjqtUdvjFaHOFAB0oApT2SSfMnyN7Dg/Vf6jB9zSaKTsZckTwHEgx6Ecqfoe30OD9aho0TIWWosUnYoS2vUocZ6jsc+o/wAmsXC+xup20ODl8IGO4M8A27iWYAjaSevXBBPU4yCeay9lJ7GvtYogv/Cdzqk4ku3VI4xtjjTLYHcsxABZj1wOAABnv0xp8pzuoWYPCVvbj3/z2ra1jLmNBNFij6ADFOwXOR8XeJrbwaqBreS4eVSy7SEjGDjDPgnceSFCngE5FZylyu3U0jFyTl0R4lqfxp1e4JS0t7W1X3UzMPxc7f8AxzFFhbHGXfjbX9RGyW+nWMZwkTeSgz1wsWwc1Nhp9jACM53SMzse7Ek/mSaY0atsMED6VmzWJ3LXIltYQMh4WbBHo2CMehUg9/euaR2R2OgsPiHqejbYy/2iMcFZACSPaT74I9cn6EVUKko+ZnOlGXSz8j1XRviFpurrtnLWsjYJEhzHuHfem3af95QOnNdEaqej0OOVGUdY6r8TvkmBUPGVKMOCpG1h9V4b8we1dHocz0J47zYNjAFB0U9B9BweO2cgdjQImDxv9w4Poxx9Tu6E+g/WmA4ZHGOcZweGA9cf4E0CFBH0pi2FoAWgAoASgBMUAJigYmKAExigY08UC2KtxBFdRmG4RJom6pIquh+qsCp/KkM8p134K+HdXzJaxvpkx/itj+7z7wPuT/vgx+1VcVjxrXfgpr2k5ksfL1OIf88T5c2PeGQ8n/rnI59BQKx5Rd20ti7QXUbwTLwY5UZHH1VgD+lVsSZGOadgHrxQBOvShAPxikgG4oEL0o9Bh0p7AOI4oHsbXhIbtb08f9Ptv/6NWkCPuYnmkUNzjpQAu/FAg8zFAC7qQHqFMBKAEoAOlMBnSkAnSgBppgNoASkAnSgBKNgGnigBtMBKQDTxQAymAh4oAaaQhh4oGNoATpTENoA8t8TH/iauD08uL/0GuOpud9L4fmzBmOEcdgp/pWJ0HR+G/Hd5o22C4zc2o4wx+dB/sMew/utkemK6FPl0exzypqW2jPcdJ1m01qLzrOQOB95Tw6H0deo+vQ9ia2TT2OOUXDRmpTICkAhAIweQexpgZs2n94Tj/ZPT8D1X6HI+lKxSZmMpQ7WBVh2PB/wI9wSPepsXcqODnNUSBQMvFAFUrQGwwrimM868ZeUZ44ZdrCSPARwCG+Zh34zz9fSvMxCakmux6+FtytPv+h45rfw+trsmS0H2abuM5Q/UHJX6j6e9Zxqyjo9UazoRlrHRnmGoaFd6MxS5jKr2ccqR65HH512RnGW2/Y8+VOVPdfMqRx7unJqmTYsC3lBzjgehH+NTdDRtWVyV+V+PY1jKN9johKxpSWvmLkHPPSsbWN7lN7N4hu6UirG1o3iTUfDpH2aRxGeSh+ZD9UbKnPfPPTkVcZuOzIlCMt0ex6F8R7XUFVbxGgfHLICyA9OUyWX1+Td16V0xrLaWnoccsO18Gvkz0K2uIrxPNtnWVD/EhBGffHIPs6A10Jp6pnG04u0lb1LaTMny/eHXaf544P4jP0qiS0twrfe/8eOOf+umOMehBpiLAGSAh5PRW4J9dvYj3BpgGdvDAqaBDqYCUAFABQAmKQxOlAbDH4FICGmMKQg6UDM7U9Istai8jUbeG7j/ALsyK+P90kbl+qkGmB43rvwF0e+zJpU02nSHoh/fwf8AfLkSqPpI3+7TuTY8Y174QeI9BzIsAv4V/wCWloTIcephIWYfgjD3p3Fax51tMbGNwUdeqMCrA+hU4IP1ApoQ4jFPyAZ0oAUcUtgFxTAWjYRu+D/+Q5p/b/TIP/RgqWUfbpODQMCaAGE4oAbuxRsAhagD1ugAoAb0oASgBDQA3pQA00AJimA2gBKQCUCG0bDENMBtIBtADaAG4pgNNIBhoENpgJigBp4oA8p8UN/xNXHpHF/6Ca4qnxHfS+E5+6kEcMjN0WNj+Qzj8cYrI6DAsL6G/TfbsGwPmXoy/Uf1GQexqyDcsb+WxkWa2doZF6MpwfofUeoIIPpSvbYLJ6PY9k0H4hxXG2DUwInPAmUfIf8AfA+4fcfL7LW8ZraWhyypW1h9x6Wjq6h0IZWGQQcgj1BHBH0rY5dh1AC0ARSwpMu2QAj+R9QeoPuKA2Ma406RDui/eL3BwHH8g36H60FXMxfkJHT26EH3B5H40thjJVxyKAKrHFAzivF2lHUYFkj/ANbDnC9nQ8lf97Iyp9cg9awqQ5lpujroz9m7PZ/geSszBgULArwVOePbB5B+tea1bRnrxd9UbYj8xAkoDoQchgCDzx9eKxvY1tc5TUfBVvORJY4hYZJTaCpzzweCvtz+IraNZx0lqvyOOeHT1hp5dDjLzSbqwkHmtKFGQ4kaPb83ygq+5ZQ2SNpy6diSSBXdFxkrqx50oypu0r/oZvkQiX7EXaN2OV35O7jJIbB7Zzkc44J4q7GakW4vNtGCpmVfcYH0Unv+GKxlHsdMZWNhb2MERt8p4yCf6f8A6vWudxZ0qSJHVJT0HpkVNrGlxtrbmGUHqB0PSpaKTsaI19dGkE1vceVKOojbk+zDkEdirAj2raCkttDOo4NWep7x4W1htf0yC+kCq8oYMqjC7kdkJCkgc4BwvQnFektjxWrN2Ohzjnp78/z4x9GyPemIepK8L37dj+HQ/wDAWBoAvQ3BYbTyoGMfeCj25yv1JPtTERxzBiQp6Ej9fqf51Qy0KCdhaACgBMUg2ENADGGBQNEWKB7CYoAMUAJQAmKBC9KQbGLrPhvS/EK7NUtYbr0Z0HmD/dlXEi/gwoA8b174B2VxmTRbuS0bqIrgedF9BIu2VR9fMqr2FY8X134Z+IvD257i0aeFf+W1qfPjx6kKPMX/AIFGMVVxWscIOpHcdR3HsR2PsaBDqYbC4oA3fCH/ACHdP7f6ZB/6MWkx+h9sseakY3NGwCE0wG0ANzigD2CgBKAEoASmA2kAhoAbQAlMQ2gYlIBppgJQIbSATpQMaaAGHimAlADaQhhoAZTAWgYw0CPKfEy/8TSQ+kcX/oNcdT4j0KXw/NnLamdtpMf+mUn/AKAaxRs9jx7QXKXURQkMA3I9NpzVz0WhnD4rHqkZLgE8N7dDWSdze1tiZJCvB7VZB1Hh7xTeaC4ELb4CctC5JT3K90PuvfqDVxk46dCJQjLffue46F4qsteULE3lz4yYXIDe+09HH+7yO4FdKalt9xwypuG+3c6WqMgoAKAKtxZxXPLjDDgMOGH49x7HI9qB7GJPZSW4O750/vKOn+8vJH1GR9KRVzKZfTp2oGV2hB4IzSKRyWr+FIL8mRP3co/iX+o71lKCludEKjhscLdWV3pZxcruToHXpjtn0/H8686dFx1R6lOupaPQbHIGG5T07e1clrHZchuoY71dkoUpkFQ3OD6g9QfcEEHFUm46rQhxUlZq5n6l4X/tOHyWdJUY/KlwnzLnptmUbh7FgT/tV0xxEo6M4p4WL1i7fkec6l4XtdBceeJk2tjas25CSD8uNzcHr8yfWuuNTmVzidFxObW7S2VkKR/eJHlI4Iz2JZ9pIGBkKM9cCra5iVeIf21PGNkICD1b5j/QD8jU8i6l87W2hQnvLi5OZZGbjpnA/IYH6VSSWyJu3uVguKsh6H0D4Gj1uLSYZtPkha3dnxBMp4w5BZXUhgWI/DtWiXYxdj0ODVNcGBLYwMV/iS4cE/XMZ/LNPVEWNdLrU5RxZQRbuuZZJMe+MKM/SgehZjsL2fH2mQKo/hjG3j0LElj+LUCulsbUFssA2r2qiSzQIcKYBigAxigBKQDG6Uw2IaCgxS2DYKBCEUgExQAUxhikIOlMYAkcjigDmNd8F6L4lBOo2kUsh/5bKPLmHuJY9rk/7xYe1GwrHiuvfAIDMmh3ePSC7H6LPGP/AEOL6tTuKx4vr3g3WfDRP9pWksUY/wCWyjzIT/21j3IP+BFT7VQtit4PIbXNPwcj7ZB/6MFAkfaxPNIobmgBCaAEzTAYTikB7HQGwUAJigBKYDaAEoAb0oEN6UAJ0oAaaAEoAb0oASgBppANpjGkUCG0DGmgBhoEMoAOlACGgDynxPxqcn+5H/6CK4qnxHoUvhXzOT1X5bK4PpDJ/wCgGslubPY8c0Ef6VH/ALrfyqp7GdP4ketWw6elcyOtl14gea0vYzsVXBibB4qhbFmOdoiGUlWXkEHBB9QRyD9KpOwHp3hz4iy2+LfVsyx9BOo+cem9f4h/tD5vUNXRGfSRySo31hp5HsNtdRXkYmt3WWNujKcj/wCsfUHkd629DjacdHoyegQUAHSgDMudLjn+ZP3T9eB8p+q+vuMH1zQNOxhT2r2x2yDHo38J+h7H2OD7UjRMrtH60ttiinNbLINrDIPrUjRxOp+ElbL2h8s/3f4f/rfhXPOkparRnVCtKGm6OImtp9OYpMpH16fn0rgnTcfQ9KFWM9t+w+OVnKsjlWjH3f6+uKw2OnyPOvFd6LmQjJI75x1Ge/pXdDTRHDUPODXWjgYwiqJ2GHC9eKBXOg8O+HZvEE4jXKRA/PJjoO4Ud2PbsOpq0rmTfY+tNFsksbeO1gXy4oUCIvoB6nuScknuSTWhmzpIxjtTEXVOOnFIkdigYu3FMQbaQBimAYoAMUAIRigCNxxQMhIxQADigQYpDDGKB7CdKQtgximAlIAxQMb0pgLQAYpANPQjseCOxHoR0I9jT2A427+Heg3t3Ffi0S3u4ZVlWW3/AHJLq2QXRP3bjPXcmT6igVjo59CkTmFg/s3yn8+R/KgDGngktjiVWT3I4/A9P1ph6EGR2qhDCcVIDDQB7R0pgJQISgYh4pgN6UgEoAaaYhKQCUwG0w2G9KQCUAIaAGGgBMYoAaaA2GGgBp4oAY1LYBtAB0pgNNAHlPiX/kKSD/Yj/wDQRXHU+J/I9Gl8K+ZyWtjbZTgd4pP/AEA1itzZ7HkOgjFyh9Fb+VOexnD4j1W16D8K5zqNQ/4UxDiofO4Z6daq9hWKTRFORyP5VVybCgcUwNbR9cvNAk8yzcqD95Dyjj/aX+oww9auMnHYiUFPRo9w8PeNrTWwI5cW1xwNjH5GP/TNzjPP8JwfTNdUZKXkzhnScNVqjs6s5woAMUAIyhgVYAg9QeQfqKA2Ma40kdYDj/YY8f8AATyR9DkfQUWLUjHeMxnYwKsOx4P1HqPcZHvUlpkLR5pDM6606K5XbIoIPtSa6FJ22OA1jwhcYzYyFOc4P8s1yyop6rQ7I4iUdGeNap4I1t5GPlBwSejqOCfQ4/StI0+XRESq3MyL4da1MeY44x6s+f0APP41rymHMdHZfCO5fH2qXA9EwPwyQTVWI5jtNP8AhdY2mNyB2A6tls/n/n2ppEXO8sfDsNiFEahNvoKoVzqYbYAAjigWxaWILTJJAmKQD8YoHsGKNhiYoEJimIMYoGJigQ00AMIpAR4xQMMYoGJigQhGKQDcUwDGKADGKQCUxiYxQAnSgApAJTDYUHByKQGsGyAQOv4UxAVyMNjB7dR+v+FINjKuNEtpuVBib1Tp+KnI/LFMRhXGg3EPMRWUf98t+R4/I0DMKZXgO2VWQ+jAj+dMR7UaYCUAFACUANoASjYBp4oAaaYhKAG0ANoATGKNgEoAaeKQDaAGnimAzpQAlAEZpANoAMUwENAHk/iX/kKyeyRfltFcdTc9Cl8P3nJa8D9im7fupf8A0A1ktzd7HkehjFyv+61OexEPiPU7MdPSuc6TU7/gKYiYfLn3oAZtAGKewWIfLB6cUxEDAx8EcevagQ4fMR3wcge/407jPRvD/jq703EN2rXNuOAWIEij1Vj94D+634EVtGo1o9Uc86KlrHR/gex6dqdtqsXnWjiRe46MpPZl6qfr17ZrqTT1R58ouDtJWL9MgKACgCKaBLhdkgBH6g+oI5B9xQGxiXGmPF80WZF9P4h/IN+h9jSsXcywAenbj6ex9D7HmixQ0x0guQNbA9RTER/ZVHamK4C2C0gHeSBTDYcIxQBZjXAp7CH4pCFxigBMUAGKBiEUC2ExQAlABjFMeww0CGGlsBHigfoFAgoGJRsAmKBidKBDaAE6UAJQMQ4AyeB70ANBz0oAXFAEsHyOD/nmgDUoEFIA+lAB0pgRSxpKux1DL6MAR+tINje6VoSFIYlACGgBtAhOlAxtAhvSmAlACUAN6UAJigBpoAaaAG0AIaAGUANNMBhpANpAFMBhoA8p8RnGpz/7sX/oAriqbno0vhXzOS1ziwn9oZf/AEA1kjV7HkWhD/SVA/ut/SnU2Ip/F8j1W0Hygd6wR1GgvBFMRYFIBpGAadgGL1FMCTaCMEcEUtgIXi8sZGcDHv1/nQMaH2jjn8x/KgC9Z6pcaa4ltpHhcfxKc/gQeCvqCCDWkW4vQmSUlZrQ9g8OfECDUQIdQ2283AEnSJz7/wDPMn0Py+46V1xmno9Dzp0XHWOq7dT0UHIyOh6VqcoUAFABQBUuLKK45YbX6bl4P49mHswPtigd7GJPaSW3LDcn95RwP94dV+vK+4pFXKpHpQAzFMBMUwFC0gF8r1oJJAu0YFABQAmKADFACdKACgBKAExQA2gBMUwI24pAR4xQGwYoAKAE6UDEpANNMXoJQA2jYBCp9cD26/r/AIUDDYvXGSO5o2GLQIKBj4h84+tAGpQSFAxKQB0pgJQM2qogKBiUAJQIaaYCUhiUCGmgBKYDTQA2iwCUANpAJTDYb0oAYeKAG0ANNMNhhpANoAOlADDQB5N4l/5Cc3+7F/6AOK4qm56FL4V8zlddGNPnHpDL+q1ktzZ6Jnkmg83KnsFb+VOp8JNP4j1Oz6fyrnR1GivBFMksMMZpgR9BQAicHNAEm7HWkMkkACflQBSEW7p8ppiIm3RnDjGeh9foaYDGUjlP0/qOlUSdV4e8cXugEQt/pFsDzExwVHfY3O36fd9u9bxny6PY5501LyZ7pofiOy8QR77N/nUfPE3yyJ9V7j/aXK+9dKalqjhlBw3+/obtMzCgBaQB0pgZlxpiSfNH+6brwPlJ917H3XB9c0DuY8sDW52yAqT0P8J+h9fY4PtRsMaABTELQAmKADFIBMUAGMUBsJ0pgFIBMYoATFAxKBCHigBtMBjDFIBmKBiUxCUgEIoGM+nNAbAFJHPH60ALtAoEBFADcYpjExQAmKQhOlAx6feGPWgDUoEHSgBKACgYnSkBtVYgoEJTGJSEJTASgY2gQ00AJSAbTASmAlIBpoAbQA3tQIYaYxtADaAGGgBnekApoAYaAPJPEf8AyFJ/pF/6LWuKp8TPRpfAjl9d/wCQfc/9e8v8qzW5o9jyXQP+Plf91v5Uqnw/McPiPUrLoKwRuaB6j8P50wLcnRqYuxAOlCAevWkMT0piJW+5+IpFEUfamIbef6sfU0IGUIv6VRDIZPv/AIf400SdX4H/AOQzbf7x/ka3p7oyqfCz6ZPWuxnmhUCCgAoAKAKGp/8AHrJ9P60xowl6D6D+VMAoAWgBtIAoAKYCGgBKAENIAoGN70CENMBpoAaaAGUhoYaBAKAIZuooGTdhTEIaQhKYwpANoGIKBCGmAUhjo/vCmBp0hBQAhoAUUDEoA//Z" />
            </CardMedia>
            <CardTitle title="Check-In" />
            <CardText>
              Check in to your upcoming appointment
            </CardText>
            <CardActions>
              <FloatingActionButton onTouchTap={this.handleCheckIn}>
                <ContentAdd />
              </FloatingActionButton>
            </CardActions>
          </Card>
        </Paper>
      </article>
    );
  }
}
export default StartComponent;
